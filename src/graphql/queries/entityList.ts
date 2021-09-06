import { queryType, stringArg } from "nexus"

export const entity = queryType({
    definition(t) {
        t.connectionField('entityList', {
            type: 'Entity',
            additionalArgs: {
                type: stringArg(),
                value: stringArg(),
                entityId: stringArg(),
            },
            async nodes(root, args, ctx) {
                return await ctx.prisma.entity.findMany({
                    take: args.first || undefined,
                    skip: args.after ? Number.parseInt(args.after) + 1 : undefined,
                    where: {
                        type: {
                            contains: args.type || undefined
                        },
                        value: {
                            contains: args.value || undefined
                        },
                        Entity: args.entityId ? {
                            id: args.entityId
                        } : null,
                    }
                })
            }
        })
    }
})
