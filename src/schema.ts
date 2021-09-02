import { connectionPlugin, makeSchema  } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'

import * as path from 'path'
import * as types from './graphql'

export const schema = makeSchema({
    types: { ...types },
    plugins: [
      nexusPrisma(),
      connectionPlugin({ includeNodesField: true })
    ],
    sourceTypes: {
      modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
    },
    contextType: {
      module: path.join(__dirname, 'context.ts'),
      export: 'Context',
    },
    outputs: {
      typegen: path.join(__dirname, '..', 'nexus-typegen.ts'),
      schema: path.join(__dirname, '..', 'schema.graphql'),
    },
})
