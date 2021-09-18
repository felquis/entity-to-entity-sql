import React from "react";
import EntityEntities from "./EntityEntities";
import SubscriptionTest from "./SubscriptionTest";

const EntityList = () => {
  return (
    <section>
      <h2>Entities</h2>

      <EntityEntities />

      <hr />

      <SubscriptionTest />
    </section>
  );
};

export default EntityList;
