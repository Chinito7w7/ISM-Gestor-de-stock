import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./home/HomePage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import AuthLayout from "./auth/layout/AuthLayout";
import { AuthenticatedRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";
import { DashboardLayout } from "./business/layouts/DashboardLayout";
import { DashboardPage } from "./business/pages/dashboard/DashboardPage";
import {ProductsPage} from "./business/pages/products/ProductsPage"
import {InventoryPage} from "./business/pages/inventory/InventoryPage"
import {MovementsPage} from "./business/pages/movements/MovementsPage"
import {ProvidersPage} from "./business/pages/providers/ProvidersPage"
import {ConfigurationPage} from "./business/pages/configuration/ConfigurationPage"
export const appRouter = createBrowserRouter([
    //Main routes
    {
        path:"/",
        element:<HomePage />
    },

    //Auth Routes
    {
        path:"/auth",
        element: <NotAuthenticatedRoute>
                    <AuthLayout/>
                </NotAuthenticatedRoute>,
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
    },


    //Business Routes

    {
        path:"/dashboard",
        element: <AuthenticatedRoute>
            <DashboardLayout/>
        </AuthenticatedRoute>,
        children:[
            { 
                index: true,
                 element: <DashboardPage />
             },
            { 
                path: "productos",
                 element: <ProductsPage />
             },
            { 
                path: "inventario",
                 element: <InventoryPage />
             },
            { 
                path: "movimientos",
                 element: <MovementsPage />
             },
             {
                path: "configuracion",
                 element:<ConfigurationPage/>
             }
        
        ]
    }

])