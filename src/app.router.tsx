import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./home/HomePage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import AuthLayout from "./auth/layout/AuthLayout";


export const appRouter = createBrowserRouter([
    //Main routes
    {
        path:"/",
        element:<HomePage />
    },

    //Auth Routes
    {
        path:"/auth",
        element:<AuthLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to="/auth/login"/>
            },
            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<RegisterPage/>
            }

        ]
    }


    //Business Routes
])