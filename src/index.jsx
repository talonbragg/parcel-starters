import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'

const App = () => <Layout>Hi</Layout>

render(<App />, document.getElementById('app'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
