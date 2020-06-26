import React from 'react'
import { useRecoilState } from 'recoil'

import { authState } from '../recoil/auth'
import { backendUrl } from '../config'

export function useAuthentication () {
  const [, setAuth] = useRecoilState(authState)

  async function authorize ({ tokenId }) {
    // make the invokee catch the error
    console.log('ma token', { tokenId, backendUrl })
    const response = await fetch(`${backendUrl}/authorize`, {
      headers: {
        Authorization: tokenId
      }
    })
    if (response.status === 200) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }

  return { authorize }
}
