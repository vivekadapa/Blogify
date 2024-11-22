"use client";


import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Layout.module.css';
const Header = dynamic(() => import('./Header'), { ssr: false });


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;