import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React, { Suspense, lazy } from "react";

import { Provider } from "react-redux";
import store from "./utils/store.js";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import AllResturantList from "./components/AllResturantList";

import Error from "./components/Error";
import SignIn from "./pages/SignIn";
import OrderSuccess from './components/OrderSuccess';
import Cart from "./components/Cart";
import ResturantMenu from "./components/AllMenuCard.jsx"


const About = lazy(() => import("./pages/About"));
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
    <Provider store={store}>
        <RouterProvider router={appRouter} >
      <App />
      </RouterProvider>
    </Provider>
  );
  