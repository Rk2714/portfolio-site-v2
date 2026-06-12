"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import type { AnalyticsEventName, AnalyticsEventParams } from "../../lib/analytics";
import { trackEvent } from "../../lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: AnalyticsEventName;
  eventParams?: AnalyticsEventParams;
};

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  href,
  ...props
}: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !eventName) {
      return;
    }

    trackEvent(eventName, {
      ...eventParams,
      destination_url: typeof href === "string" ? href : undefined,
    });
  };

  return <a {...props} href={href} onClick={handleClick} />;
}
