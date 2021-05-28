const nextTranslate = require("next-translate");

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [process.env.IMAGES_DOMAIN],
    path: "/_next/image",
    loader: "default",
  },
  ...nextTranslate(),
};
