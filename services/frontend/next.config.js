/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@jjmauction/common'],
    async rewrites() {
        return [
            {
                source: '/api/auth/:path*',
                destination: 'http://localhost:4000/api/auth/:path*' // Proxy to Backend
            },
            {
                source: '/api/users/:path*',
                destination: 'http://localhost:4000/api/users/:path*' // Proxy to Backend
            },
            {
                source: '/api/listings/:path*',
                destination: 'http://localhost:4001/api/listings/:path*' // Proxy to Backend
            },
            {
                source: '/socket.io/:path*',
                destination: 'http://localhost:4001/socket.io/:path*' // Proxy to Listings Service for WebSockets
            }
        ]
    }
};

module.exports = nextConfig;
