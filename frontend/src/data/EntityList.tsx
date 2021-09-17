import React from "react";
import { prepareQuery } from "../../gqty";
import EntityRow from "../ui/EntityRow";
import ErrorMessage from "../ui/ErrorMessage";
import EntityAdd from "./EntityCreate";
import EntityEntities from "./EntityEntities";
import SubscriptionTest from "./SubscriptionTest";

const EntityList = () => {
  const { data, isLoading, isRefetching, error } = usePrepared();

  return (
    <section>
      <h2>Entities</h2>

      <ul>
        {data?.map((e) => {
          return (
            <li key={e?.id}>
              <EntityRow entity={{ ...e, __typename: undefined }} />

              {e?.id ? <EntityEntities id={e?.id} /> : null}
            </li>
          );
        })}

        {isLoading || isRefetching ? "Loading..." : ""}
      </ul>

      <ErrorMessage error={error} />

      <EntityAdd />
      <hr />
      <SubscriptionTest />
    </section>
  );
};

const { usePrepared, refetch, preload } = prepareQuery((query) => {
  return query
    .entityList({ first: 1000 })
    ?.nodes?.map(({ ...x }) => ({ ...x }));
});

preload();

export { refetch, usePrepared, preload };

export default EntityList;
