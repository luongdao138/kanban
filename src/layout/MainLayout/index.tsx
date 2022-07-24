import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../common/SideBar';

const MainLayout = () => {
    return (
        <div>
            <SideBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
