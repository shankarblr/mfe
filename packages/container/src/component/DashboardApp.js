import React, { useRef, useEffect } from 'react'
import { mount } from 'dashboard/DashboardApp'

const DashboardApp = () => {
  const ref = useRef(null)

  const authUpdate = ({ pathname: nextpathname }) => {
    const { pathname } = history.location

    if (pathname !== nextpathname) history.push(nextpathname)
  }

  const authSignedIn = () => {
    console.log('Signed In from Auth')
    onSignIn()
  }

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}
export default DashboardApp
