import React from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { Outlet } from 'react-router-dom';
const UserLayout = () => {
  return (
    <>
    <Header />

   <main>
    <Outlet />
   </main>


    <Footer />
  
    
    
    
    </>
  )
}

export default UserLayout
