/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  Entity: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
    type: { __type: "String" },
    value: { __type: "String" },
  },
  EntityConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[EntityEdge]" },
    nodes: { __type: "[Entity]" },
    pageInfo: { __type: "PageInfo!" },
  },
  EntityEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Entity" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  mutation: {
    __typename: { __type: "String!" },
    entityCreate: {
      __type: "Entity",
      __args: { entityId: "String", type: "String!", value: "String" },
    },
    entityDelete: { __type: "Entity", __args: { id: "String!" } },
    entityUpdate: {
      __type: "Entity",
      __args: {
        connectedEntityId: "String",
        disconnectedEntityId: "String",
        id: "String!",
        type: "String!",
        value: "String",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    entityList: {
      __type: "EntityConnection",
      __args: {
        after: "String",
        before: "String",
        entityId: "String",
        first: "Int",
        last: "Int",
        type: "String",
        value: "String",
      },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    entity: { __type: "Entity", __args: { entityId: "String!" } },
  },
} as const;

export interface Entity {
  __typename?: "Entity";
  id?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  value?: Maybe<ScalarsEnums["String"]>;
}

export interface EntityConnection {
  __typename?: "EntityConnection";
  /**
   * https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  /**
   * Flattened list of Entity type
   */
  nodes?: Maybe<Array<Maybe<Entity>>>;
  /**
   * https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
}

export interface EntityEdge {
  __typename?: "EntityEdge";
  /**
   * https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor
   */
  cursor: ScalarsEnums["String"];
  /**
   * https://facebook.github.io/relay/graphql/connections.htm#sec-Node
   */
  node?: Maybe<Entity>;
}

/**
 * PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo
 */
export interface PageInfo {
  __typename?: "PageInfo";
  /**
   * The cursor corresponding to the last nodes in edges. Null if the connection is empty.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>;
  /**
   * Used to indicate whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * Used to indicate whether more edges exist prior to the set defined by the clients arguments.
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
  /**
   * The cursor corresponding to the first nodes in edges. Null if the connection is empty.
   */
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  entityCreate: (args: {
    entityId?: Maybe<Scalars["String"]>;
    type: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
  }) => Maybe<Entity>;
  entityDelete: (args: { id: Scalars["String"] }) => Maybe<Entity>;
  entityUpdate: (args: {
    connectedEntityId?: Maybe<Scalars["String"]>;
    disconnectedEntityId?: Maybe<Scalars["String"]>;
    id: Scalars["String"];
    type: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
  }) => Maybe<Entity>;
}

export interface Query {
  __typename?: "Query";
  entityList: (args?: {
    /**
     * Returns the elements in the list that come after the specified cursor
     */
    after?: Maybe<Scalars["String"]>;
    /**
     * Returns the elements in the list that come before the specified cursor
     */
    before?: Maybe<Scalars["String"]>;
    entityId?: Maybe<Scalars["String"]>;
    /**
     * Returns the first n elements from the list.
     */
    first?: Maybe<Scalars["Int"]>;
    /**
     * Returns the last n elements from the list.
     */
    last?: Maybe<Scalars["Int"]>;
    type?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["String"]>;
  }) => Maybe<EntityConnection>;
}

export interface Subscription {
  __typename?: "Subscription";
  entity: (args: { entityId: Scalars["String"] }) => Maybe<Entity>;
}

export interface SchemaObjectTypes {
  Entity: Entity;
  EntityConnection: EntityConnection;
  EntityEdge: EntityEdge;
  Mutation: Mutation;
  PageInfo: PageInfo;
  Query: Query;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "Entity"
  | "EntityConnection"
  | "EntityEdge"
  | "Mutation"
  | "PageInfo"
  | "Query"
  | "Subscription";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
