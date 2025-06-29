import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UserLayout from './component/Layout/UserLayout';
import Home from './pages/Home';
import {Toaster} from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './component/Products/ProductDetails';
import Checkout from './component/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './component/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagment from './component/Admin/UserManagment';
import ProductManagment from './component/Admin/ProductManagment';
import EditProductPage from './component/Admin/EditProductPage';
import OrderManagment from './component/Admin/OrderManagment';
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from './component/Common/ProtectedRoute';
const App = () => {
  return (
    <Provider store={store}>
  <BrowserRouter>
  <Toaster position="top-right" />
  
 <Routes>
  <Route path="/" element={<UserLayout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
  <Route path="profile" element={<Profile />} />
  <Route path="collections/:collection" element={<CollectionPage />} />
  <Route path="products/:id" element={<ProductDetails />} />
  <Route path='checkout' element ={<Checkout />} />
  <Route path='order-confirmation' element={<OrderConfirmationPage />} />
  <Route path='order/:id' element={<OrderDetailsPage />} />
  <Route path='my-orders' element={<MyOrdersPage />} />
  </Route>
  <Route
   path='/admin'
    element={
    <ProtectedRoute role='admin'>
      <AdminLayout />
      </ProtectedRoute>}>
  
  <Route index element={<AdminHomePage />} />
  <Route path='users' element={<UserManagment />} />
  <Route path='products' element={<ProductManagment />} />
  <Route path='products/:id/edit' element={<EditProductPage />} />
<Route path='orders' element={<OrderManagment />} />
    </Route>
</Routes>

    
  </BrowserRouter>
    </Provider>
  )
}

export default App
