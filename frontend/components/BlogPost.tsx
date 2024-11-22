import React from 'react';
import styles from '../styles/BlogPost.module.css';
import Link from 'next/link';

interface BlogPostProps {
    _id: string;
    title: string;
    content: string;
    author: {
        email: string
    };
    createdAt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ _id, title, content, createdAt }) => {
    return (
        <article className={styles.post} >
            <p className={styles.meta}>{new Date(createdAt).toDateString()}</p>
            <h2 className={styles.title}>{title.toUpperCase()}</h2>
            <div className={styles.content}>{content.length > 30 ? content.slice(0, 30) + "..." : content}</div>
            <Link href={`/post/${_id}`} className={styles.button}>Read More</Link>
        </article>
    );
};

export default BlogPost;