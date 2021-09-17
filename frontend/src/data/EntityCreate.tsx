import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Entity, useMutation } from "../../gqty";
import ErrorMessage from "../ui/ErrorMessage";
import { refetch } from "./EntityList";

const EntityCreate = ({
  setParentState,
  parentEntity,
}: {
  parentEntity?: Entity;
  setParentState?: Function;
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      type: "",
      value: "",
      entityId: parentEntity?.id,
    },
  });

  const [entityCreate, { isLoading, error }] = useMutation(
    (mutation, args: { type: string; value: string; entityId: string }) => {
      const data = mutation.entityCreate({
        type: args.type,
        value: args.value,
        entityId: args.entityId,
      });

      return { ...data };
    }
  );

  const onSubmit = useCallback(
    (data) => {
      entityCreate({
        args: {
          type: data.type,
          value: data.value,
          entityId: data.entityId,
        },
      }).then(() => {
        setParentState && setParentState(false);
        refetch();
      });
    },
    [entityCreate, setParentState]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Add</h3>
        <fieldset>
          <label>Type:</label>
          <input
            {...register("type", { required: true })}
            disabled={isLoading}
          />
        </fieldset>
        <fieldset>
          <label>Value:</label>
          <input
            {...register("value", { required: false })}
            disabled={isLoading}
          />
        </fieldset>
        <input {...register("entityId", { required: false })} hidden />
        <ErrorMessage error={error} />
        <button
          type="reset"
          onClick={() => setParentState && setParentState(false)}
          disabled={isLoading}
        >
          cancel
        </button>{" "}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding" : "Add"}
        </button>
      </form>
    </>
  );
};

export default EntityCreate;
