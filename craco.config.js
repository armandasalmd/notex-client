const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@actions": "./src/actions",
          "@components": "./src/components",
          "#": "./src/components",
          "##": "./src/components/components",
          "@reducers": "./src/reducers",
          "@utils": "./src/utils",
        }
      }
    }
  ],
};