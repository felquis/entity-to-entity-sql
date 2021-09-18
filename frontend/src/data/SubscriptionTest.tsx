import { useSubscription } from "../../gqty";

export default function SubscriptionTest() {
  const { entity } = useSubscription();

  const update = entity({
    entityId: "test",
  });

  return <>{update?.type}</>;
}
