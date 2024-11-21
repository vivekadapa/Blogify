"use client";


import React from 'react';
import Header from './Header';
import styles from '../styles/Layout.module.css';

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