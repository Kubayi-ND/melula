import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { CartProvider } from './components/ui/cartContext';

// Create a Layout component to hold shared UI elements
const Layout = () => {
  return (
    <>
      {/* Outlet renders the matching child route */}
      <Outlet />
      <Footer />
    </>
  );
};

// Define routes using the Layout as the root element
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

// App component just provides the router
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
