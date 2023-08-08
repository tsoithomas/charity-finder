import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root'
import Home from './components/Home'
import Search from './components/SearchBar'
import CharityDetail from './components/CharityDetail'
import FavoriteCharities from './components/FavoriteCharities';
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
      { path: "search/:terms", element: <Search /> },
      { path: "favorites", element: <FavoriteCharities /> },
      { path: "charity/:id", element: <CharityDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
