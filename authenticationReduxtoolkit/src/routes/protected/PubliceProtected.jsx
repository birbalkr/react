import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PubliceProtected = () => {
    let { user } = useSelector((state) => state.auth)
    if (!user) {
        alert("Please login first");
        return <Navigate to="/main" />;
    }

    return (
        <Outlet />
    )
}

export default PubliceProtected