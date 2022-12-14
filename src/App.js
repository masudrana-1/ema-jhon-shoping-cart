
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/layouts/Main';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';

function App() {

  // set route 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('Products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
  ])
  return (
    <div>
      {/* set router provider */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
