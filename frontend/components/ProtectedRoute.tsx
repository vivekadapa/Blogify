import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/lib/api';
import styles from '../styles/Home.module.css';


const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
    const ProtectedComponent = (props: any) => {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(true);
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const verifyAndRefreshToken = async () => {
                try {
                    const response = await checkAuth();

                    if (response.ok) {
                        setIsAuthenticated(true);
                    } else if (response.status === 401) {
                        const refreshResponse = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/refresh`,
                            {
                                method: 'POST',
                                credentials: 'include',
                            }
                        );

                        if (refreshResponse.ok) {
                            setIsAuthenticated(true);
                        } else {
                            throw new Error('Refresh token is invalid.');
                        }
                    } else {
                        throw new Error('Token validation failed.');
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    router.replace('/login');
                } finally {
                    setIsLoading(false);
                }
            };

            verifyAndRefreshToken();
        }, [router]);

        if (isLoading) return <div className={styles.noposts}>Loading...</div>;
        if (!isAuthenticated) return null;

        return <WrappedComponent {...props} />;
    };

    return ProtectedComponent;
};

export default ProtectedRoute;
