import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { tmdbApi } from "./features/TMDB"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider api={tmdbApi}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>,
)
