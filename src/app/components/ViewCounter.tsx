"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface Props {
  postId: string;
}

export default function ViewCounter({ postId }: Props) {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const key = `viewed:${postId}`;
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      fetch(`/api/views/${postId}`, { method: "POST" })
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setVisible(false));
    } else {
      fetch(`/api/views/${postId}`)
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setVisible(false));
    }
  }, [postId]);

  if (!visible || count === null) return null;

  return (
    <div className="inline-flex items-center gap-1.5 text-xs text-[#a0a09c]">
      <Eye size={12} />
      <span>{count.toLocaleString()} views</span>
    </div>
  );
}
