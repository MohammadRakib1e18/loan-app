import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, [pathname]);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;