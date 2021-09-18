import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Entity, useMutation } from "../../gqty";
import ErrorMessage from "../ui/ErrorMessage";

const EntityEdit = ({
  entity,
  setParentState,
}: {
  entity: Entity;
  setParentState: Function;
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      type: entity.type,
      value: entity.value,
      entityId: "",
    },
  });

  const [entityEdit, { isLoading, error }] = useMutation(
    (mutation, args: { id: string; type: string; value: string }) => {
      const data = mutation.entityUpdate({
        id: args.id,
        type: args.type,
        value: args.value,
      });

      return { ...data };
    }
  );

  const onSubmit = useCallback(
    (data) => {
      entityEdit({
        args: {
          id: entity.id || "",
          value: data.value,
          type: data.type,
        },
      }).then(() => {
        setParentState(false);

        // todo: refetch
      });
    },
    [setParentState, entityEdit, entity]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Edit</h3>
      <fieldset>
        <label>Type:</label>
        <input {...register("type", { required: true })} />
      </fieldset>
      <fieldset>
        <label>Value:</label>
        <input {...register("value", { required: false })} />
      </fieldset>
      <fieldset>
        <label>Connect to Entity ID:</label>
        <input {...register("entityId", { required: false })} />
      </fieldset>
      <ErrorMessage error={error} />
      <button type="reset" onClick={() => setParentState(false)}>
        cancel
      </button>{" "}
      <button type="submit">submit</button>
    </form>
  );
};

export default EntityEdit;
