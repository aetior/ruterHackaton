import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

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
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },


]);