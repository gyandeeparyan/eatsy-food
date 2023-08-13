import React, { Suspense,lazy } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AllResturantList from "./components/AllResturantList";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import SignIn from "./pages/SignIn";
import ResturantMenu from "./components/AllMenuCard";




const About =lazy(()=>import("./pages/About"))

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
        element: (
          <Suspense fallback={<Error/>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/",
        element: <AllResturantList />,
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
