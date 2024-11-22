"use client";


import React from 'react';
import { Suspense } from 'react';
import Header from './Header';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;