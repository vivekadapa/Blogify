import Layout from '@/components/Layout';
import BlogPost from '../components/BlogPost';
import styles from '../styles/Home.module.css';
import { getPosts } from '@/lib/api';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: {
    email: string
  };
  createdAt: string;
}



export default async function Home() {

  const posts: Post[] = await getPosts();
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Blogs</h1>
        <div className={styles.posts}>
          {
            posts.length > 0 ? (
              posts.map((post) => (
                <BlogPost key={post._id} {...post} />
              ))
            ) : <div className={styles.noposts}>No posts yet</div>
          }
        </div>
      </div>
   </Layout>
  );
}

