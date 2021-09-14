import { subscriptionField } from 'nexus'

export const SubscriptionField = subscriptionField('truths', {
  type: 'Boolean',
  subscribe() {
    return (async function*() {
      while (true) {
        await new Promise(res => setTimeout(res, 1000))
        yield Math.random() > 0.5
      }
    })()
  },
  resolve(eventData) {
    return eventData
  },
})
