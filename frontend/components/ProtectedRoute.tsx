import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/lib/api'; // Import the API function

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(true);
        const isAuthenticated = localStorage.getItem("isAuthenticated");

        useEffect(() => {
            const verifyToken = async () => {
                try {
                    const response = await checkAuth();

                    if (response.ok) {
                        localStorage.setItem("isAuthenticated", "true");
                    } else {
                        localStorage.setItem("isAuthenticated", "false");
                        router.replace('/login');
                    }
                } catch (error) {
                    router.replace('/login');
                } finally {
                    setIsLoading(false);
                }
            };

            verifyToken();
        }, [router]);

        if (isLoading) return <p>Loading...</p>;
        if (isAuthenticated === "false") return null;

        return <WrappedComponent {...props} />;
    };
};

export default ProtectedRoute;
