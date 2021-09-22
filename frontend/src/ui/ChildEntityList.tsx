import { EntityConnection } from "../../gqty";
import EntityRow from "./EntityRow";

export default function ChildEntityList({
  list,
  refetch,
}: {
  list?: EntityConnection | null;
  refetch?: Function;
}) {
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
}
