import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
    const [isAuthorized, setisAuthorized ]= useState(null)
    useEffect(() =>{
        getToken()
    },[])
    const getToken = () =>{
        const token = localStorage.getItem('authToken')
        console.log(token)
        if (token) {
            setisAuthorized(true)
        } else{
            setisAuthorized(false)
        }
    }
    if (isAuthorized) {
        return <Outlet />;
    } else if(isAuthorized == false) {
        return <Navigate to="/register" />;
    }
}
