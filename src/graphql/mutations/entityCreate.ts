import { mutationField, nonNull, stringArg } from "nexus";

export const entityCreate = mutationField('entityCreate', {
    type: 'Entity',
    args: {
        type: nonNull(stringArg()),
        value: stringArg(),
        entityId: stringArg(),
    },
    async resolve(root, args, ctx) {
        return ctx.prisma.entity.create({
            data: {
                type: args.type,
                value: args.value,
                entities: args.entityId ? {
                    connect: {
                        id: args.entityId,
                    }
                } : undefined
            }
        })
    }
})
