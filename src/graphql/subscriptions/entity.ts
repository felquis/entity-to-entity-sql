import { withFilter } from "graphql-subscriptions";
import { nonNull, stringArg, subscriptionField } from "nexus";
import { pubsub } from "../../context";

export const SubscriptionEntity = subscriptionField("entity", {
  type: "Entity",
  args: {
    entityId: nonNull(stringArg()),
  },
  subscribe: withFilter(
    () => pubsub.asyncIterator(["newEntity", "updateEntity", "deleteEntity"]),
    (_root, _args, _ctx) => {
      console.log("---");
      console.log("root", _root);
      console.log("args", _args);
      return true;
    }
  ),
  resolve(eventData, args) {
    console.log("event resolve", eventData);

    return eventData;
  },
});
