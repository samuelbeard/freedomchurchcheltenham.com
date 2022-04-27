/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/messages",
                destination: "https://www.freedomchurch.cc/series",
                permanent: false,
            },
            {
                source: "/give",
                destination: "https://www.freedomchurch.cc/give",
                permanent: false,
            },
            {
                source: "/youtube",
                destination: "https://www.youtube.com/c/freedomchurchcc",
                permanent: false,
            },
            {
                source: "/facebook",
                destination: "https://www.facebook.com/FreedomChurchCheltenham",
                permanent: false,
            },
            {
                source: "/instagram",
                destination:
                    "https://www.instagram.com/freedomcheltenham/?hl=en",
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
