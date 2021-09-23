import React from "react";
import { EntityConnection } from "../../gqty";
import ChildEntityList from "../ui/ChildEntityList";
import RootEntityList from "../ui/RootEntityList";

const EntityEntities = ({
  id,
  childEntities,
  refetch,
}: {
  id?: string;
  childEntities?: EntityConnection | null;
  refetch?: Function;
}) => {
  return id ? (
    <ul>
      <ChildEntityList list={childEntities} refetch={refetch} />
    </ul>
  ) : (
    <RootEntityList />
  );
};

export default EntityEntities;
