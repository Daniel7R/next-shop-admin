/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    //to ignore eslint errors during compiling
    eslint: {
        ignoreDuringBuilds: false,
    },
};

module.exports = nextConfig;
