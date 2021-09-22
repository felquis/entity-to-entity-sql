import { useCallback } from "react";
import { useQuery, useRefetch } from "../../gqty";
import EntityCreate from "../data/EntityCreate";
import ChildEntityList from "./ChildEntityList";

export default function RootEntityList() {
  const query = useQuery();
  const refetch = useRefetch();

  const rootList = query.entityList({ first: 1000, entityId: null });
  const refetchRoot = useCallback(() => {
    refetch(rootList);
  }, []);

  return (
    <>
      <EntityCreate refetch={refetchRoot} />

      <ul>
        <ChildEntityList list={rootList} refetch={refetchRoot} />
      </ul>
    </>
  );
}
