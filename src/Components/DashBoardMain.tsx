import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import app from '../../utils/firebase-config';

const DashboardMain: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        // Check the user's authentication status
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                // If the user is not logged in, redirect to the login page
                router.push('/login');
            }
        });

        // Clean up the subscription
        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            const auth = getAuth(app);
            await signOut(auth);
            // Redirect the user to the login page
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="h-screen">
            <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-900">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <button
                    className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-xl font-semibold mb-4">Welcome to the CMS Dashboard!</h2>
                {/* Your dashboard content goes here */}
            </div>
        </div>
    );
};

export default DashboardMain;
