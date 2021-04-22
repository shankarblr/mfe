import React, { useRef, useEffect } from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null)
  const history = useHistory()

  const authUpdate = ({ pathname: nextpathname }) => {
    const { pathname } = history.location

    if (pathname !== nextpathname) history.push(nextpathname)
  }

  const authSignedIn = () => {
    console.log('Signed In from Auth')
    onSignIn()
  }

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onSignIn: authSignedIn,
      onNavigating: authUpdate,
      initialPath: history.location.pathname,
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
export default AuthApp
