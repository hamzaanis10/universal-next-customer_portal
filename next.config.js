/** @type {import('next').NextConfig} */

const nextConfig = {
    // experimental:{
    //   serverActions:true
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'universalmotorstorage.blob.core.windows.net',
                port: '',
                pathname: '/umimages/**',
            },
        ],
    },
}

module.exports = nextConfig

