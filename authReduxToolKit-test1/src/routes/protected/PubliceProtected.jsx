import React from 'react'
import { useSelector } from 'react-redux';
import {  Navigate, Outlet } from 'react-router'

function PubliceProtected() {
    const { isAuthenticated } = useSelector((state) => state.auth)

    if (isAuthenticated) {
        return <Navigate to="/main" replace />
    }

    return (
        <Outlet />
    )
}

export default PubliceProtected
