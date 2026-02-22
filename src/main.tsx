import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IsmApp } from './IsmApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IsmApp />
  </StrictMode>,
)
