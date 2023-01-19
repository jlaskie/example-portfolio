/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};

// double check and edit all of the values below

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' ;
    img-src 'self';
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  // https://scotthelme.co.uk/a-new-security-header-referrer-policy/
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
  key: 'X-XSS-Protection',
  value: '1; mode=block'
}
];
//const securityHeaders = []
/*
module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
}, {
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN'
}
// delete all of the above and copy what leerob.io did on github
// also try to load next fonts in here
]
      },
    ]
  },
}*/

// use x-content type, content-security-policy (self and youtube probably since your content is coming from youtube, probably fonts too,), xframe options - sameorigin, http strict transport?, permissions policy deny for all, referrer policy is needed-origin when cross origin


module.exports = nextConfig


// imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],