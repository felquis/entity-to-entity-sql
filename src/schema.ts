import { connectionPlugin, makeSchema } from "nexus";

import * as path from "path";
import * as types from "./graphql";

const schema = makeSchema({
  types: { ...types },
  plugins: [connectionPlugin({ includeNodesField: true })],
  shouldExitAfterGenerateArtifacts: true,
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  contextType: {
    module: path.join(__dirname, "context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: path.join(__dirname, "..", "nexus-typegen.ts"),
    schema: path.join(__dirname, "..", "schema.graphql"),
  },
});

export { schema };
