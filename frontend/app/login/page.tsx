"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import { login } from '@/lib/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            if (response.ok) {
                localStorage.setItem("isAuthenticated", "true");
                router.push('/dashboard');
            }
            else {
                const errorData = await response.json();
                setError(errorData.error || 'Login failed');
            }

        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>Login</h1>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className={styles.input}
                        />
                        <button type="submit" className={styles.button}>Login</button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>

            </div>
        </Layout>
    );
};

export default Login;