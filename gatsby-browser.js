import React from 'react'

import App from './src/components/App'
import { wrapRootElement as wrap } from "./src/components/wrap-root-element";

export const wrapRootElement = wrap;


export const wrapPageElement = ({ element, wrap }) => {
  return <App>{element}</App>
}
