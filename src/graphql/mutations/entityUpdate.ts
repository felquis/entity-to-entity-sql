import { mutationField, nonNull, stringArg } from "nexus";

export const entityUpdate = mutationField('entityUpdate', {
    type: 'Entity',
    args: {
        id: nonNull(stringArg()),
        type: nonNull(stringArg()),
        value: stringArg(),
        connectedEntityId: stringArg(),
        disconnectedEntityId: stringArg(),
    },
    async resolve(root, args, ctx) {
        return ctx.prisma.entity.update({
            where: {
                id: args.id,
            },
            data: {
                type: args.type,
                value: args.value,
                Entity: args.connectedEntityId ? {
                    connect: {
                        id: args.connectedEntityId,
                    }
                } : undefined
            }
        })
    }
})
