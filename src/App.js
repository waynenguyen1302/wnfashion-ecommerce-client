import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Store from "./pages/Store/Store";
import "./App.scss"
import { useRef } from "react";
import { useScrollDirection } from "./hooks/useScrollDirection";


const Layout = () => {
  
  const scrollContainerRef = useRef(null);
  const scrollDirection = useScrollDirection(scrollContainerRef);

  return (
    <div className="app" ref={scrollContainerRef} style={{ overflow: "scroll" }}>
      <Navbar scrollDirection={scrollDirection} />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products",
        element: <Store />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;