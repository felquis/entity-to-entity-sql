/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:4000/graphql",
    headers: {},
  },
  destination: "./gqless/index.ts",
  subscriptions: true,
  javascriptOutput: false,
};

module.exports = config;
