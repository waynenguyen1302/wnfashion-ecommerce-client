// import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Store from "./pages/Store/Store"
import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout />,
//     children: [
//       {
//         path:"/",
//         element: <Home />
//       },
//       {
//         path:"/products/:id",
//         element: <Products />
//       },
//       {
//         path:"/product/:id",
//         element: <Product />
//       },
//       {
//         path:"/categories",
//         element: <Store />
//       },
//     ]
//   },
  
  
// ])

function App() {
  return (
    // <div>
    //   <RouterProvider router={router} />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/categories" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
