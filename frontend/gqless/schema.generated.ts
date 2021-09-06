/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  String: true,
  Int: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    entityList: {
      __type: "EntityConnection",
      __args: {
        type: "String",
        value: "String",
        entityId: "String",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
      },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    entityCreate: {
      __type: "Entity",
      __args: { type: "String!", value: "String", entityId: "String" },
    },
    entityUpdate: {
      __type: "Entity",
      __args: {
        id: "String!",
        type: "String!",
        value: "String",
        connectedEntityId: "String",
        disconnectedEntityId: "String",
      },
    },
    entityDelete: { __type: "Entity", __args: { id: "String!" } },
  },
  subscription: {},
  Entity: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
    value: { __type: "String" },
    type: { __type: "String" },
  },
  EntityConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[EntityEdge]" },
    pageInfo: { __type: "PageInfo!" },
    nodes: { __type: "[Entity]" },
  },
  EntityEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Entity" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
    endCursor: { __type: "String" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  entityList: (args?: {
    type?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["String"]>;
    entityId?: Maybe<Scalars["String"]>
    /**
     * Returns the first n elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements in the list that come after the specified cursor
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns the last n elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements in the list that come before the specified cursor
     */;
    before?: Maybe<Scalars["String"]>;
  }) => Maybe<EntityConnection>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  entityCreate: (args: {
    type: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
    entityId?: Maybe<Scalars["String"]>;
  }) => Maybe<Entity>;
  entityUpdate: (args: {
    id: Scalars["String"];
    type: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
    connectedEntityId?: Maybe<Scalars["String"]>;
    disconnectedEntityId?: Maybe<Scalars["String"]>;
  }) => Maybe<Entity>;
  entityDelete: (args: { id: Scalars["String"] }) => Maybe<Entity>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Entity {
  __typename: "Entity" | undefined;
  id?: Maybe<ScalarsEnums["String"]>;
  value?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface EntityConnection {
  __typename: "EntityConnection" | undefined;
  /**
   * https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types
   */
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  /**
   * https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo
   */
  pageInfo: PageInfo;
  /**
   * Flattened list of Entity type
   */
  nodes?: Maybe<Array<Maybe<Entity>>>;
}

export interface EntityEdge {
  __typename: "EntityEdge" | undefined;
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
  __typename: "PageInfo" | undefined;
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
  /**
   * The cursor corresponding to the last nodes in edges. Null if the connection is empty.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Entity: Entity;
  EntityConnection: EntityConnection;
  EntityEdge: EntityEdge;
  PageInfo: PageInfo;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Entity"
  | "EntityConnection"
  | "EntityEdge"
  | "PageInfo";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
