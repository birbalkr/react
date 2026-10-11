import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import HomePages from "../pages/HomePages";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";
import PubliceProtected from "./protected/PubliceProtected";
import MainProtected from "./protected/MainProtected";
const AppRoutes = () => {
  let dispatch = useDispatch();

  const hydrated = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    dispatch(addUser(user));
  }
  useEffect(() => {
    hydrated()

  }, [])

  let routes = createBrowserRouter([
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
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
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
              element: <HomePages />,
            },
          ],
        }
      ]
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
