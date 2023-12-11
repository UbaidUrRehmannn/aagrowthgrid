const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: 'static/[name]-[hash].[ext]',
      },
    });
    return config;
  },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.pdf$/,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           name: 'static/[name]-[hash].[ext]', // Use a hash to make filenames unique
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
  reactStrictMode: true,
  // output: 'export',
  // // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
