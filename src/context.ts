import { PrismaClient } from "@prisma/client";
import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis, { RedisOptions } from "ioredis";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  pubsub: RedisPubSub;
}

export let pubsub: RedisPubSub;

if (process.env.NODE_ENV === "production") {
  const options: RedisOptions = {
    host: process.env.REDIS_HOST,
    retryStrategy: (times: number) => {
      return Math.min(times * 50, 2000);
    },
  };

  pubsub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  });
} else {
  pubsub = new RedisPubSub();
}

export default function createContext() {
  return {
    prisma,
    pubsub,
  };
}
