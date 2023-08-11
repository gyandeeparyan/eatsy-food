import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import AllResturantList from "./components/AllResturantList";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import ResturantMenu from "./components/AllMenuCard";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/",
        element: <AllResturantList/>,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={appRouter} />

);


export default App;
