import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
    const isAuthorized = false;
    if (isAuthorized) {
        return <Outlet />;
    } else {
        return <Navigate to="/register" />;
    }
}
