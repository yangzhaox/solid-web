'use strict'

import { createSignal, onCleanup, html } from "../solid-web/solid-web.js"

const Counter = () => {
  const [count, setCount] = createSignal(0)
  const timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))
  return html`<h1>${count}</h1>`
}

export default Counter
