import React from 'react';
import styles from '@/styles/BlogPost.module.css';
import Layout from '@/components/Layout';


interface BlogPost {
    _id: string;
    title: string;
    content: string;
    author: {
        email: string;
    };
    createdAt: string;
}


export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/posts/post/${id}`, {
        method: 'GET',
        credentials: 'include',
    });

    if (!res.ok) {
        return (
            <Layout>
                <p>Error: Post not found!</p>
            </Layout>
        );
    }

    const post: BlogPost = await res.json();

    return (
        <Layout>
            <div className={`${styles.post} ${styles.fullWidthPost}`}>
                <p className={styles.meta}>{new Date(post.createdAt).toDateString()}</p>
                <h2 className={styles.title}>{post.title.toUpperCase()}</h2>
                <div className={styles.content}>{post.content}</div>
                <p className={styles.author}>By {post.author.email}</p>
            </div>
        </Layout>
    );
}
