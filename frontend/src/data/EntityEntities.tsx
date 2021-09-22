import React, { useCallback } from "react";
import { EntityConnection, useRefetch } from "../../gqty";
import ChildEntityList from "../ui/ChildEntityList";
import RootEntityList from "../ui/RootEntityList";

const EntityEntities = ({
  id,
  childEntities,
}: {
  id?: string;
  childEntities?: EntityConnection | null;
}) => {
  const refetch = useRefetch();
  const list = childEntities;

  const refetchList = useCallback(() => {
    refetch(list);
  }, []);

  return id ? (
    <ul>
      <ChildEntityList list={list} refetch={refetchList} />
    </ul>
  ) : (
    <RootEntityList />
  );
};

export default EntityEntities;
