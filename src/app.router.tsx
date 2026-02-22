import { createBrowserRouter } from "react-router";
import { HomePage } from "./home/HomePage";

export const appRouter = createBrowserRouter([
    //Main routes
    {
        path:"/",
        element:<HomePage />
    },

    //Auth Routes
    {
        path:"/auth",
        
    }

    //Business Routes
])