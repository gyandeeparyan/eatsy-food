import React, { Suspense, lazy } from "react";
import { Footer } from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Provider, useSelector } from "react-redux";

function App() {
  const dark = useSelector((store) => store.app.isDark);

  return (
    <>
      <div className={`${dark ? "dark" : ""}`}>
    
          <Navbar />

          <Outlet />

          <Footer />
      
      </div>
    </>
  );
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/about",
//         element: (
//           <Suspense fallback={<Error />}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/signin",
//         element: <SignIn />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/",
//         element: <AllResturantList />,
//       },
//       {
//         path: "/resturant/:resId",
//         element: <ResturantMenu />,
//       },
//       {
//         path: "/orderPlaced",
//         element: <OrderSuccess/>,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />
// );

export default App;
