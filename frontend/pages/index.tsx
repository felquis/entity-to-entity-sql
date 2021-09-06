import type { NextPage } from 'next'
import EntityCreate from '../src/data/EntityCreate'
import EntityList from '../src/data/EntityList'

const Home: NextPage = () => {
  return (
    <>
      <EntityList />
      <EntityCreate />
    </>
  )
}

export default Home
