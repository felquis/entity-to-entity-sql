import { mutationField, nonNull, stringArg } from "nexus";

export const entityDelete = mutationField('entityDelete', {
    type: 'Entity',
    args: {
        id: nonNull(stringArg()),
    },
    async resolve(root, args, ctx) {
        return ctx.prisma.entity.delete({
            where: {
                id: args.id,
            },
        })
    }
})
