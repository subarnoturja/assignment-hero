import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";

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
            }
        ]
    }
])