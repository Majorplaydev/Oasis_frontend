import React from "react";
import "./App.scss"
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/home/Home";
import Gig from "./Pages/gig/Gig";
import Gigs from "./Pages/Gigs/Gigs";
import MyGigs from "./Pages/myGigs/MyGigs";
import Add from "./Pages/add/Add";
import Orders from "./Pages/orders/Orders";
import Message from "./Pages/message/Message";
import Messages from "./Pages/messages/Messages";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {

  const Layout = () => {
    return(
      <div className="app" >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Orders/>

        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
