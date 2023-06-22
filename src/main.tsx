import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PortfolioRouter } from './router/PortfolioRouter'
import './firebase/config';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <PortfolioRouter/>
  </React.StrictMode>,
)
