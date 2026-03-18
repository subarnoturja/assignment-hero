import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installations from "../pages/Installations/Installations";
import ErrorPage from "../components/ErrorPage";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "apps",
                Component: Apps,
            },
            {
                path: "/app/:id",
                Component: AppDetails,
            },
            {
                path: 'installations',
                Component: Installations,
            }
        ]
    }
])