"use client"


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Signup.module.css';
import { signup } from '@/lib/api';
import Layout from '@/components/Layout';

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signup({ email, password });
            router.push('/login');
        } catch (err) {
            console.log(err)
            setError('Error creating account');
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>Sign Up</h1>
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
                        <button type="submit" className={styles.button}>Sign Up</button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            </div>
        </Layout>
    );
};

export default Signup;