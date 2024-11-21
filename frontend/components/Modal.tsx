import React, { useState } from 'react';
import { createPost } from '@/lib/api';
import styles from '@/styles/Dashboard.module.css';

interface ModalProps {
    setIsModalOpen: (value: boolean) => void;
    fetchPosts: () => void;
}

const Modal: React.FC<ModalProps> = ({ setIsModalOpen, fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createPost({ title, content });
            setTitle('');
            setContent('');
            setIsModalOpen(false);
            fetchPosts();
        } catch (error) {
            console.log('Error creating post:', error);
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2 className={styles.modalTitle}>Create New Post</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title" className={styles.label}>
                            Title
                        </label>
                        <input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="content" className={styles.label}>
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className={styles.textarea}
                            required
                        />
                    </div>
                    <div className={styles.btngrp}>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className={styles.closeButton}
                        >
                            Close
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
