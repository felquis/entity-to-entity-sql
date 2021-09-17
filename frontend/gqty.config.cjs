/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:4000/graphql",
    headers: {},
  },
  destination: "./gqty/index.ts",
  subscriptions: true,
  javascriptOutput: false,
};

module.exports = config;
