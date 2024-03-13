import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '@/utils/firebase-config';

const DashboardMain: React.FC = () => {
    const router = useRouter();
    
    const uploadMeida = () => {
       router.push('/uploadMedia');
    };

   

    const viewAllMedia = () => {
        router.push('/viewAllMedia');
    };

    return (
        <div className="min-h-screen">
            
            <div className="container mx-auto py-8 px-4 gap-4">
                <h2 className="text-xl font-semibold mb-4 text-center">Hello Bandu, Welcome to Your Personal Dashboard</h2>
                <div className='flex items-center justify-evenly'>
                    <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none text-white" onClick={uploadMeida}>
                        upload a Media
                    </button>
                  
                   <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none text-white" onClick={viewAllMedia}>
                       View All Media
                    </button>
                        
                </div>
            </div>
            
        </div>
    );
};

export default DashboardMain;
