/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqty/react";
import { createSubscriptionsClient } from "@gqty/subscriptions";
import { createClient, QueryFetcher } from "gqty";
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "http://localhost:4000/graphql" if needed
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
  });

  const json = await response.json();

  return json;
};

const subscriptionsClient =
  typeof window !== "undefined"
    ? createSubscriptionsClient({
        wsEndpoint: () => {
          // Modify if needed
          const url = new URL(
            "http://localhost:4000/graphql",
            window.location.href
          );
          url.protocol = url.protocol.replace("http", "ws");
          return url.href;
        },
      })
    : undefined;

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
  subscriptionsClient,
});

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
  track,
} = client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export * from "./schema.generated";
