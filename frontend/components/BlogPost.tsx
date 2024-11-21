import React from 'react';
import styles from '../styles/BlogPost.module.css';
import { format } from 'date-fns';
import Link from 'next/link';

interface BlogPostProps {
    _id:string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ _id,title, content, author, createdAt }) => {

    return (
        <article className={styles.post} >
            <p className={styles.meta}>{format(new Date(createdAt), "MMM d, yyyy")}</p>
            <h2 className={styles.title}>{title.toUpperCase()}</h2>
            <div className={styles.content}>{content.length > 30 ? content.slice(0,30) + "...":content}</div>
            <Link href={`/post/${_id}`} className={styles.button}>Read More</Link>
        </article>
    );  
};

export default BlogPost;