import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import IntegrationForm from '../components/IntegrationForm'

const Callback: NextPage = () => {
  const router = useRouter()

  console.log('//', router.query)

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('transnotionEvent', {
        detail: 'test gilang',
      }),
    )
  })

  return (
    <div className="integration-form">
      <IntegrationForm />
    </div>
  )
}

export default Callback
