import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
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
                path: "apps/:id",
                Component: AppDetails,
            }
        ]
    }
])