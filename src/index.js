import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/style/css/style.css';
import Root from './routes/root';
import Index from './routes';
import Error from './routes/error';
import Qsj from './components/content/qsj';
import Philosophie from './components/content/philosophie';
import Contact from './components/content/contact';
import ArticlesGallery from './components/articlesGallery';
import ArticlesCard from './components/articlesCard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "gallery",
                element: <ArticlesGallery />,
            },
            {
                path: "articles/:name",
                element: <ArticlesCard />,
            },
            {
                path: "qsj",
                element: <Qsj />,
            },
            {
                path: "philosophie",
                element: <Philosophie />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);