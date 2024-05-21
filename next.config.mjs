/** @type {import('next').NextConfig} */
import optimizeLocales from "@react-aria/optimize-locales-plugin";
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {

    config.plugins.push(
       optimizeLocales.webpack({
          locales: ["sv-SE"]
       })
    );

    return config;
 },
};

export default nextConfig;
