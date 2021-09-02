import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient
}

export default function createContext() {
    return {
        prisma
    }
}
