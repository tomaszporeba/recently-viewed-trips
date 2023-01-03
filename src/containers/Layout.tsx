import React from 'react';
import Head from 'next/head';
interface DesktopProps {
    children: React.ReactNode
}

function Layout({ children }: DesktopProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1280" />
            </Head>
            {children}
        </>
    );
}

export default Layout;
