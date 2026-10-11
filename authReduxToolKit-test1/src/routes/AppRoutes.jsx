import React, { useEffect } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import PubliceProtected from './protected/PubliceProtected'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/AuthSlice'
import ShopPage from '../pages/ShopPage'


function AppRoutes() {
  let dispatch = useDispatch();

  const hydrated = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("out in if ", user);
    
    if (!user) {
      return;
    }
    dispatch(addUser(user));
  }
  useEffect(() => {
    hydrated()

  }, [])
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PubliceProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />
            },
            {
              path: "register",
              element: <RegisterPage />
            }
          ]
        }
      ]
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />
            },
            {
              path: "shop",
              element: <ShopPage />
            },
            {
              path: "about",
              element: <section className="min-h-screen bg-slate-950 p-8 text-white"><h1 className="text-3xl font-bold">About Atlas</h1><p className="mt-3 text-slate-400">A calm, connected place to organize your work.</p></section>
            },
            {
              path: "profile",
              element: <section className="min-h-screen bg-slate-950 p-8 text-white"><h1 className="text-3xl font-bold">Profile</h1><p className="mt-3 text-slate-400">Manage your Atlas account details here.</p></section>
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default AppRoutes
