import React from 'react';
import { useRouter } from 'next/router';
import CategoryStats from '../View/CategoryStats';
import {FaUpload, FaEye} from 'react-icons/fa';

const DashboardMain: React.FC = () => {
    const router = useRouter();
    
    const navigate = (path: string) => {
        router.push(path);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-12 px-4 flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mb-8 text-center ">Welcome to Your Personal Dashboard, Bandu</h2>
                <CategoryStats />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Upload Media Card */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate('/artworks')}>
                       <FaUpload className="w-16 h-16 mb-4 text-blue-500"/>
                        <p className="text-lg font-semibold">Upload Arworks</p>
                        <p className="text-sm text-gray-600 text-center mt-2">Share your latest creations with the world.</p>
                    </div>

                    {/* View All Media Card */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate('/artworks')}>
                    <FaEye className="w-16 h-16 mb-4 text-blue-500"/>
                        <p className="text-lg font-semibold">View All Artworks</p>
                        <p className="text-sm text-gray-600 text-center mt-2">Explore your gallery and enjoy your collections.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
