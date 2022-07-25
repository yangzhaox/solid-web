'use strict'

import { html } from "../solid-web/solid-web.js"
import Header from "./header.js"
import Counter from "./counter.js"

const App = () => {
  return html`<${Header} /><${Counter} />`
}

export default App
