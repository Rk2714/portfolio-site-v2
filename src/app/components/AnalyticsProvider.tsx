import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Suspense } from "react";
import PageViewTracker from "./PageViewTracker";

export default function AnalyticsProvider() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <VercelAnalytics />
      {gaId ? (
        <>
          <Script
            id="gtag-base"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false${process.env.NODE_ENV !== "production" ? ", debug_mode: true" : ""} });
              `,
            }}
          />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        </>
      ) : null}
    </>
  );
}
