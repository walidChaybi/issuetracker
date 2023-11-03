/** @type {import('next').NextConfig} */
const nextConfig = {};

const removeImports = require("next-remove-imports");

module.exports = nextConfig;
module.exports = removeImports()({
  // ✅  options...
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
