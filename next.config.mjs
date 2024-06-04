/** @type {import('next').NextConfig} */
import optimizeLocales from '@react-aria/optimize-locales-plugin';
const nextConfig = {
   i18n: {
      locales: ["en", "en-US"],
      defaultLocale: "en"
   },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {

   if (!isServer) {
      config.plugins.push(
         optimizeLocales.webpack({
            locales: ["en", "en-US"]
         })
      );
    }




    return config;
 },
};

export default nextConfig;
