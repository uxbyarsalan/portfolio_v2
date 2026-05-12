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
};

export default nextConfig;
