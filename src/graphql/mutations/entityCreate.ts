import { mutationField, nonNull, stringArg } from "nexus";

export const entityCreate = mutationField('entityCreate', {
    type: 'Entity',
    args: {
        type: nonNull(stringArg()),
        value: stringArg(),
        entityId: stringArg(),
    },
    async resolve(root, args, ctx) {
        let connectTo

        if (args.entityId) {
            connectTo = await ctx.prisma.entity.findFirst({
                where: { id: args.entityId }
            })

            if (!connectTo) throw new Error('entityID not found')
        }

        const entity = await ctx.prisma.entity.create({
            data: {
                type: args.type,
                value: args.value,
            }
        })

        if (connectTo) {
            await ctx.prisma.entity.update({
                where: {
                    id: connectTo.id
                },
                data: {
                    entities: {
                        connect: {
                            id: entity.id
                        }
                    }
                }
            })
        }

        return entity
    }
})
