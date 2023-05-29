/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/products",
                destination: "/Products",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
