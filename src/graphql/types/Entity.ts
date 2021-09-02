import { objectType } from "nexus"

export const Entity = objectType({
    name: 'Entity',
    definition(t) {
        t.string('id')
        t.string('value')
        t.string('type')
        // t.string('createdAt')
        // t.string('updatedAt')
    }
})
