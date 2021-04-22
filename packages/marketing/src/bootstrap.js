import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'

const mount = (el, { onNavigating, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigating) {
    history.listen(onNavigating)
  }

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate({ pathname: nextpathname }) {
      const { pathname } = history.location

      if (nextpathname !== pathname) history.push(nextpathname)
    },
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root')
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
