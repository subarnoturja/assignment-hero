import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index: true,
                Component: Home,
            }
        ]
    }
])