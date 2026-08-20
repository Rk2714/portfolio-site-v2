import { kv } from "@vercel/kv";
import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getMediaByIdFromCMS, isValidMediaId } from "../../../../lib/media-data";

const RATE_LIMIT_WINDOW_SECONDS = 60;
const RATE_LIMIT_MAX_WRITES = 30;

function getRateLimitKey(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientAddress = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  const digest = createHash("sha256").update(clientAddress).digest("hex").slice(0, 24);
  return `views:rate:${digest}`;
}

async function isRateLimited(request: NextRequest): Promise<boolean> {
  const key = getRateLimitKey(request);
  const count = await kv.incr(key);
  if (count === 1) await kv.expire(key, RATE_LIMIT_WINDOW_SECONDS);
  return count > RATE_LIMIT_MAX_WRITES;
}

async function isPublishedMediaId(id: string): Promise<boolean> {
  if (!isValidMediaId(id)) return false;
  return Boolean(await getMediaByIdFromCMS(id));
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    if (!isValidMediaId(id)) {
      return NextResponse.json({ error: "Invalid media id" }, { status: 400 });
    }
    if (await isRateLimited(request)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_SECONDS) } }
      );
    }
    if (!(await isPublishedMediaId(id))) {
      return NextResponse.json({ error: "Media not found" }, { status: 404 });
    }
    const key = `views:${id}`;
    const count = await kv.incr(key);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    if (!(await isPublishedMediaId(id))) {
      return NextResponse.json({ error: "Media not found" }, { status: 404 });
    }
    const key = `views:${id}`;
    const count = (await kv.get<number>(key)) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
