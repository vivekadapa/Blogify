

import React from 'react';
import { format } from 'date-fns';
import styles from '@/styles/BlogPost.module.css';
import Layout from '@/components/Layout';


interface BlogPost {
    _id: string;
    title: string;
    content: string;
    authorId: {
        email: string
    }
    createdAt: string;
}


export default async function Page({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/posts/post/${id}`, {
        method: 'GET',
        credentials: 'include',
    });
    if (!res.ok) {
        return <p>Error: Post not found!</p>;
    }

    const post: BlogPost = await res.json();
    return (
        <Layout>
            <div className={`${styles.post} ${styles.fullWidthPost}`}>
                <p className={styles.meta}>{format(new Date(post.createdAt), "MMM d, yyyy")}</p>
                <h2 className={styles.title}>{post.title.toUpperCase()}</h2>
                <div className={styles.content}>{post.content}</div>
                <p className={styles.author}>By {post.authorId.email}</p>
            </div>
        </Layout>
    );
}
