'use strict'

import { createSignal, onCleanup, render, html } from "./solid-web.js"

const Header = () => {
  return html`<h1>Solid.js but NO build and NO cdn</h1>`
}

const Counter = () => {
  const [count, setCount] = createSignal(0)
  const timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))
  return html`<h1>${count}</h1>`
}

const App = () => {
  return html`<${Header} /><${Counter} />`
}

render(App, document.body)