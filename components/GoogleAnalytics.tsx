// File: components/GoogleAnalytics.tsx
'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as gtag from '@/lib/gtag'

export default function GoogleAnalytics() {
  const pathname = usePathname() 

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname)
    }
  }, [pathname])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}
