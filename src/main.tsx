import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { worker } from './mocks/browser'
import { events } from './mocks/events'
import { store } from './mocks/store'

const init = () => {
  worker.start();
  store.set('events', events)
  console.log(store.get('events'));
}

init()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
