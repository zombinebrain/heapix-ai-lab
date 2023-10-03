/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  output: "standalone",
  images: {
    formats: ['image/webp']
  }
};

module.exports = nextConfig;
