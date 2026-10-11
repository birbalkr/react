import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/AuthSlice'

function MainLayout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userName } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('user')
        navigate('/', { replace: true })
    }

    const linkClass = ({ isActive }) =>
        `rounded-lg px-3 py-2 text-sm font-semibold transition ${
            isActive
                ? 'bg-cyan-400 text-slate-950'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        }`

    return (
        <div className="min-h-screen bg-slate-950">
            <nav className="border-b border-slate-800 bg-slate-900/95 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                    <NavLink to="/main" className="shrink-0 text-xl font-black tracking-tight text-white">
                        <span className="text-cyan-400">a</span>tlas
                    </NavLink>

                    <div className="flex items-center gap-1">
                        <NavLink to="/main" end className={linkClass}>Home</NavLink>
                        <NavLink to="/main/shop" className={linkClass}>Shop</NavLink>
                        <NavLink to="/main/about" className={linkClass}>About</NavLink>
                    </div>

                    <div className="flex items-center gap-2">
                        <NavLink
                            to="/main/profile"
                            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white sm:block"
                        >
                            {userName?.email || 'Profile'}
                        </NavLink>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-lg border border-rose-400/40 px-3 py-2 text-sm font-semibold text-rose-300 transition hover:bg-rose-400 hover:text-slate-950"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout
