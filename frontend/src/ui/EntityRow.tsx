import React, { useCallback, useRef, useState } from "react";
import { Entity, useMutation, useQuery, useRefetch } from "../../gqty";
import EntityCreate from "../data/EntityCreate";
import EntityEdit from "../data/EntityEdit";
import EntityEntities from "../data/EntityEntities";

const EntityRow = ({
  entity,
  refetch,
}: {
  entity?: Entity;
  refetch?: Function;
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [showEditForm, setEditForm] = useState(false);
  const [showAddForm, setAddForm] = useState(false);
  const [entityDelete] = useMutation((mutation, args: { id: string }) => {
    const data = mutation.entityDelete({
      id: args.id,
    });

    return { ...data };
  });

  const onEdit = useCallback(() => {
    setEditForm(true);
  }, []);

  const onAdd = useCallback(() => {
    setAddForm(true);
  }, [setAddForm]);

  const onDelete = useCallback(() => {
    entityDelete({
      args: {
        id: entity?.id || "",
      },
    }).then(() => {
      if (refetch) {
        refetch();
      }
    });
  }, [entityDelete, entity, refetch]);

  const onChange = useCallback(
    (event) => {
      const action = event.target.value;

      if (selectRef.current?.value) {
        selectRef.current.value = "";
      }

      if (action === "delete") {
        onDelete();
      } else if (action === "edit") {
        onEdit();
      } else if (action === "add") {
        onAdd();
      }
    },
    [selectRef, onDelete, onEdit, onAdd]
  );

  const query = useQuery();
  const childRefetch = useRefetch();
  const childList = query.entityList({ first: 100, entityId: entity?.id });
  const refetchChildList = useCallback(() => {
    childRefetch(childList);
  }, []);

  return (
    <>
      <div>
        <span style={{ marginInlineEnd: "0.5rem" }}>
          {entity?.type}
          {entity?.value ? `: ${entity?.value}` : ""}
        </span>

        <select onChange={onChange} ref={selectRef}>
          <option value="">option</option>
          <option value="delete">delete</option>
          <option value="edit">edit</option>
          <option value="add">add</option>
        </select>
      </div>

      {showEditForm ? (
        <EntityEdit
          entity={{ ...entity, __typename: undefined }}
          setParentState={setEditForm}
        />
      ) : null}

      {showAddForm ? (
        <EntityCreate
          parentEntity={{ ...entity, __typename: undefined }}
          setParentState={setAddForm}
          refetch={refetchChildList}
        />
      ) : null}

      {entity?.id ? (
        <EntityEntities
          id={entity?.id}
          childEntities={childList}
          refetch={refetchChildList}
        />
      ) : null}
    </>
  );
};

export default EntityRow;
