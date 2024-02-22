import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";

import { Artista} from "../pages/PageArtist";
import Formulario from "../pages/Formu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/formu",
                element: <Formulario />
            },
            {
                path: "/pageArtist",
                element: <Artista />
            }
        ]
    },


]);