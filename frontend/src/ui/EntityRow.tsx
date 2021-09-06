import React, { useCallback, useRef, useState } from "react";
import { Entity, useMutation } from "../../gqless";
import EntityEdit from "../data/EntityEdit";
import { refetch } from "../data/EntityList";

const EntityRow = ({ entity }: { entity?: Entity }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [showEditForm, setEditForm] = useState(false);
  const [entityDelete] = useMutation((mutation, args: { id: string }) => {
    const data = mutation.entityDelete({
      id: args.id,
    });

    return { ...data };
  });

  const onEdit = useCallback(() => {
    setEditForm(true);
  }, []);

  const onDelete = useCallback(() => {
    entityDelete({
      args: {
        id: entity?.id || "",
      },
    }).then(() => {
      refetch();
    });
  }, [entityDelete, entity]);

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
      }
    },
    [selectRef, onDelete, onEdit]
  );

  return (
    <>
      <div>
        {entity?.type}
        {entity?.value ? `: ${entity?.value}` : ""} - {'"'}
        {entity?.id}
        {'"'}
        <select onChange={onChange} ref={selectRef}>
          <option value="">option</option>
          <option value="delete">delete</option>
          <option value="edit">edit</option>
        </select>
      </div>

      {showEditForm ? (
        <EntityEdit entity={{ ...entity, __typename: undefined }} setParentState={setEditForm} />
      ) : null}
    </>
  );
};

export default EntityRow;
