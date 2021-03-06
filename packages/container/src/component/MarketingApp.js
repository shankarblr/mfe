import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useHistory()

  const marketingUpdate = ({ pathname: nextpathname }) => {
    const { pathname } = history.location

    if (pathname !== nextpathname) history.push(nextpathname)
  }

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigating: marketingUpdate,
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default MarketingApp
