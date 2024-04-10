import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { Calc } from './Calc.media.jsx';
import { Contact } from './Contact.jsx';
import { Tecnologies } from './Tecnologies.jsx';
import { Api } from './ApiRickAndMorty.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calc",
    element: <Calc />,
  },
  {
    path: "/contc",
    element: <Contact />,
  },
  {
    path: "/technologies",
    element: <Tecnologies />,
  },
  {
    path: "/api",
    element: <Api/>
  },
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

