import React, { useCallback } from "react";
import { EntityConnection, useQuery, useRefetch } from "../../gqty";
import EntityRow from "../ui/EntityRow";
import EntityCreate from "./EntityCreate";

const EntityEntities = ({ id }: { id?: string }) => {
  const query = useQuery();
  const refetch = useRefetch();

  const list = query.entityList({ first: 100, entityId: id });

  const refetchList = useCallback(() => {
    refetch(list);
  }, []);

  return (
    <ul>
      <EntityEntitiesList list={list} refetch={refetchList} />

      {!id ? <EntityCreate refetch={refetchList} /> : null}
    </ul>
  );
};

const EntityEntitiesList = ({
  list,
  refetch,
}: {
  list?: EntityConnection | null;
  refetch?: Function;
}) => {
  return (
    <>
      {list?.nodes?.map((entity) => {
        return (
          <li
            key={entity?.id}
            style={{
              border: "1px solid",
              borderTopWidth: 0,
              padding: "0.5rem",
            }}
          >
            <EntityRow
              entity={{ ...entity, __typename: undefined }}
              refetch={refetch}
            />
          </li>
        );
      })}
    </>
  );
};

export default EntityEntities;
