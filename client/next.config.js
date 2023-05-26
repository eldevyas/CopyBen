/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        "NEXT_PUBLIC_API_URL": "https://api.copyben.online/api"
    }
}

module.exports = nextConfig
