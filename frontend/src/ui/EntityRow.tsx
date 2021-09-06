import React, { useCallback, useRef, useState } from "react";
import { Entity, useMutation } from "../../gqless";
import { refetch } from "../data/EntityList";

const EntityRow = ({ entity }: { entity?: Entity }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [entityDelete] = useMutation((mutation, args: { id: string;}) => {
    const data = mutation.entityDelete({
      id: args.id,
    });

    return {...data}
  });

  const onDelete = useCallback(() => {
    entityDelete({
      args: {
        id: entity?.id || ''
      }
    }).then(() => {
      refetch()
    })
  }, [entityDelete, entity]);

  const onChange = useCallback(
    (event) => {
      const action = event.target.value;

      if (selectRef.current?.value) {
        selectRef.current.value = "";
        // setOpen(action);
      }

      if (action === 'delete') {
        onDelete()
      }
    },
    [selectRef, onDelete]
  );

  return (
    <>
      {entity?.type}
      {entity?.value ? `: ${entity?.value}` : ""} - {'"'}
      {entity?.id}
      {'"'}

      <select onChange={onChange} ref={selectRef}>
        <option value="">option</option>
        <option value="delete">delete</option>
      </select>
    </>
  );
};

export default EntityRow;
