import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

function MainProtected() {
    const { isAuthenticated } = useSelector((state) => state.auth)

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }



    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainProtected
