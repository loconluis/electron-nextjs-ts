const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) =>
    Object.assign(config, {
      target: "electron-renderer",
    }),
};
