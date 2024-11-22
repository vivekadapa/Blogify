'use client';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import BlogPost from '@/components/BlogPost';
import styles from '@/styles/Dashboard.module.css';
import { getPostsByAuthor } from '@/lib/api';
import Modal from '@/components/Modal';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Post {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

const Dashboard: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const authorPosts = await getPostsByAuthor();
            setPosts(authorPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <Layout>
            <>
                <div className={styles.container}>
                    <div>
                        <div className={styles.postheader}>
                            <h2>Your Posts</h2>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={styles.createButton}
                            >
                                Create New
                            </button>
                        </div>
                        <div className={styles.posts}>
                            {posts.length > 0 ? (
                                posts.map((post) => <BlogPost key={post._id} {...post} />)
                            ) : (
                                <div className={styles.noposts}>You have not posted Yet</div>
                            )}
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <Modal setIsModalOpen={setIsModalOpen} fetchPosts={fetchPosts} />
                )}
            </>
        </Layout>
    );
};

export default ProtectedRoute(Dashboard);
