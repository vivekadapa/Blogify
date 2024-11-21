"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css';
import { logout } from '@/lib/api';

const Header: React.FC = () => {
    const router = useRouter();
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true" ? true : false
    const [menuOpen, setMenuOpen] = useState(false);


    const handleLogout = async () => {
        await logout();
        localStorage.setItem("isAuthenticated", "false");
        router.push('/login');
    };

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className={styles.header}>

            <Link href={'/'}>Blogify</Link>
            <nav className={menuOpen ? styles.navOpen : ''}>
                <Link href="/" className={styles.link}>Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                        <button onClick={handleLogout} className={styles.link}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className={styles.link}>Login</Link>
                        <Link href="/signup" className={styles.link}>Sign Up</Link>
                    </>
                )}
            </nav>
            <button onClick={handleMenu} className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </header>
    );
};

export default Header;