import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../../utils/firebase-config';
import Image from 'next/image';

const DashboardMain: React.FC = () => {
    const router = useRouter();
    

    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleCategoryClick = () => {
        setShowPopup(true); // Show the popup when a category button is clicked
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Hide the popup when the close button is clicked
    };

    return (
        <div className="min-h-screen">
            
            <div className="container mx-auto py-8 px-4 gap-4">
                <h2 className="text-xl font-semibold mb-4 text-center">Hello Bandu, Welcome to Your Personal Dashboard</h2>
                <div className='flex items-center justify-evenly'>
                    <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={handleCategoryClick}>
                        upload a creation
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default DashboardMain;
