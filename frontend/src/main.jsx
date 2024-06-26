import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import App from './App'
import Community from './pages/community'
import Title from './components/title/title'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route path="/" element={<App />} />
      <Route path="community" element={<Community />} />
    </Route>
  )
)

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return (
    <>
      <Title />
      <h1 style={{textAlign: 'center', marginTop: '-5rem'}}>Error 404: Page Not Found</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
