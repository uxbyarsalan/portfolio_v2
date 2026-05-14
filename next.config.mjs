/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Redirect any legacy /v2/* URLs to their root equivalents.
  // The v18.30 launch reorganization moved all v2 content to root; this
  // catch-all preserves any external links that may have been shared
  // pointing at the old preview URLs (e.g. /v2/work/dastak → /work/dastak,
  // /v2 → /, /v2/contact → /contact, etc.).
  async redirects() {
    return [
      {
        source: '/v2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/v2/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

  // Security headers applied to every response.
  //
  // What each does:
  //   - X-Frame-Options: prevents the site from being embedded in an <iframe>
  //     on another domain. Defense against clickjacking attacks.
  //   - Referrer-Policy: when users click outbound links, only the origin
  //     (e.g. "https://uxbyarsalan.com") is sent — not the full URL with
  //     query params. Limits info leakage.
  //   - Permissions-Policy: denies access to powerful browser APIs the site
  //     doesn't need (camera, microphone, geolocation, etc.). Defense-in-depth
  //     in case any third-party script ever tries to access them.
  //   - X-Content-Type-Options: prevents browsers from MIME-sniffing
  //     responses, which can be exploited to execute uploaded content
  //     as scripts.
  //
  // Skipped intentionally:
  //   - Content-Security-Policy: powerful but needs careful tuning around
  //     Web3Forms, Vercel Analytics, and Google Fonts. Deferred to
  //     post-launch when there's time to test thoroughly.
  //   - Strict-Transport-Security (HSTS): Vercel injects this automatically.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
