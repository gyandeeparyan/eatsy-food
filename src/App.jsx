import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AllResturantList from "./components/AllResturantList";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import SignIn from "./pages/SignIn";
import ResturantMenu from "./components/AllMenuCard";
import Cart from "./components/Cart";
import { Provider } from "react-redux";

const About = lazy(() => import("./pages/About"));
import store from "./utils/store";
import OrderSuccess from './components/OrderSuccess';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Outlet />

        <Footer />
      </Provider>
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
          <Suspense fallback={<Error />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <AllResturantList />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/orderPlaced",
        element: <OrderSuccess/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

export default App;
