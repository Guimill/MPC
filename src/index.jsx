import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/style/css/style.css';
import Root from './routes/root';
import Error from './routes/error';
import Formation from './components/content/formation';
import Realisations from './components/content/realisations';
import Experiences from './components/content/experiences';
import Competences from "./components/content/competences";
import Accueil from './routes/accueil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "formation",
        element: <Formation />,
      },
      {
        path: "realisations",
        element: <Realisations />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "competences",
        element: <Competences />,
      }
    ]
  },
  {
    path: "/accueil",
    element: <Accueil />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);