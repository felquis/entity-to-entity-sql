import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "../../gqless";
import ErrorMessage from "../ui/ErrorMessage";

import { refetch } from "./EntityList";

const EntityCreate = ({}: {}) => {
  const { handleSubmit, register } = useForm();

  const [entityCreate, { isLoading, error }] = useMutation(
    (
      mutation,
      {
        type,
        value,
        entityId,
      }: {
        type: string;
        value: string;
        entityId?: string;
      }
    ) => {
      const data = mutation.entityCreate({ type, value, entityId });

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
        refetch();
      });
    },
    [entityCreate]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>EntityCreate</h2>

      <fieldset>
        <label>Type</label>
        <input {...register("type", { required: true })} disabled={isLoading} />
      </fieldset>

      <fieldset>
        <label>Value</label>
        <input {...register("value")} disabled={isLoading} />
      </fieldset>

      <fieldset>
        <label>Connect to Entity ID</label>
        <input {...register("entityId")} disabled={isLoading} />
      </fieldset>

      <ErrorMessage error={error} />

      <footer>
        <button type="reset" disabled={isLoading}>
          Reset
        </button>{" "}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding" : "Add"}
        </button>
      </footer>
    </form>
  );
};

export default EntityCreate;
