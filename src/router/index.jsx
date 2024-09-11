import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Groups from "../pages/Groups";
import RegisterForm from "../components/register/RegisterForm";
import LoginForm from "../components/login/LoginForm";
import ProtectedRoutes from "../layout/ProtectedRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/", 
                element: <Home />,
            },
            {
                path: "/register", 
                element: <RegisterForm />,
            },
            {
                path: "/login", 
                element: <LoginForm />,
            },
            {
                path: "/", 
                element: <ProtectedRoutes />, 
                children: [
                    {
                        path: "groups",
                        element: <Groups />,
                    },
                ],
            },
        ],
    },
]);