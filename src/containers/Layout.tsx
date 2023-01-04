import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

interface DesktopProps {
    children: React.ReactNode
}

function Layout({children}: DesktopProps) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}

export default Layout;
