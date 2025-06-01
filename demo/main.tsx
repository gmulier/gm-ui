import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Demo } from './Demo.tsx'
import { GettingStarted } from './GettingStarted.tsx'
import '../src/styles/globals.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "/getting-started",
    element: <GettingStarted />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 