import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Profile from "@/pages/users/profile";
import EditProfile from "@/pages/users/edit-profile";
import BookDetail from "@/pages/books/detail";
import NotFound from "@/pages/not-found";
import ProtectedRoute from "./protected-route";
import Borrow from "@/pages/books/borrow";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          loader: () => "Homepage | Library App",
          element: <Homepage />,
        },
        {
          path: "/login",
          loader: () => "Login | Library App",
          element: <Login />,
        },
        {
          path: "/register",
          loader: () => "Register | Library App",
          element: <Register />,
        },
        {
          path: "/profile",
          loader: () => "Profile | Library App",
          element: <Profile />,
        },
        {
          path: "/profile/edit",
          loader: () => "Edit Profile | Library App",
          element: <EditProfile />,
        },
        {
          path: "/books",
          loader: () => "List of Books | Library App",
          element: <Homepage />,
        },
        {
          path: "/books/:id_book",
          loader: () => "Detail Book | Library App",
          element: <BookDetail />,
        },
        {
          path: "/history-borrow",
          loader: () => "History Borrow | Library App",
          element: <BookDetail />,
        },
        {
          path: "/dashboard",
          loader: () => "Dashboard | Library App",
          element: <BookDetail />,
        },
        {
          path: "*",
          loader: () => "Not Found | Library App",
          element: <NotFound />,
        },
        {
          path: "/borrow",
          loader: () => "Borrow | Library App",
          element: <Borrow />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
