import { mutationField, nonNull, stringArg } from "nexus";

export const entityDelete = mutationField("entityDelete", {
  type: "Entity",
  args: {
    id: nonNull(stringArg()),
  },
  async resolve(_root, args, ctx) {
    const deleted = await ctx.prisma.entity.delete({
      where: {
        id: args.id,
      },
    });

    ctx.pubsub.publish("deleteEntity", deleted);

    return deleted;
  },
});
