import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import IntegrationForm from '../components/IntegrationForm'

const Callback: NextPage = () => {
  const router = useRouter()

  console.log('//', router.query)

  return (
    <div className="integration-form">
      <IntegrationForm />
    </div>
  )
}

export default Callback
