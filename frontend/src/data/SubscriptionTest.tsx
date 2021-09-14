import {useSubscription} from "../../gqless"

export default function SubscriptionTest() {
  const { truths } = useSubscription()

  return <>Testi {truths ? `something: ${truths}` : 'nothing'}</>
}

