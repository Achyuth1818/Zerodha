import React from "react";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinupPage from "./landing_page/signup/SinupPage";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/signup",
    element: <SinupPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
