import React from 'react'
import { useRecoilState } from 'recoil'
import { GoogleLogin } from 'react-google-login'

import { authState } from '../recoil/auth'
import { useAuthentication } from '../hooks/useAuthentication'

export const Main = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const { authorize } = useAuthentication()
  console.log('are we human or are we', auth)

  function googleError (res) {
    setAuth(false)
  }

  return (
    <GoogleLogin
      clientId={process.env.GCLIENT}
      buttonText="Login"
      onSuccess={authorize}
      onFailure={googleError}
      accessType="offline"
      isSignedIn
    />
  )
}
