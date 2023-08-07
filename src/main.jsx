import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.tsx'
import Home from './components/Home.tsx'
import FavoriteCharities from './components/FavoriteCharities.tsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Root } from 'postcss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "favorites", element: <FavoriteCharities /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
