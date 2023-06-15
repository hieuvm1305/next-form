/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    GOOGLE_CLIENT_ID: "1022799784477-oo8ljanoimqt5vfki20phen53rv5t579.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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",
  },
};

module.exports = nextConfig;
