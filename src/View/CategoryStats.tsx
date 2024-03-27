// CategoryStats.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '@/utils/firebase-config';
import { fetchAllArtworks } from '../Controller/ArtworkController';

interface CategoryCount {
  performances: number;
  paintings: number;
  sculptures: number;
}

const CategoryStats: React.FC = () => {
  const [categoryCounts, setCategoryCounts] = useState<CategoryCount>({ performances: 0, paintings: 0, sculptures: 0 });

  const fetchCategoryCounts = async () => {
       const allArtworks= await fetchAllArtworks();
         const categoryCounts = allArtworks.reduce((acc, artwork) => {
    if (artwork.type === 'Performance') {
        acc.performances++;
        }
    if (artwork.type === 'Painting') {
        acc.paintings++;
        }
    if (artwork.type === 'Installations') {
        acc.sculptures++;
        }
    return acc;
    }
    , { performances: 0, paintings: 0, sculptures: 0 });
    setCategoryCounts(categoryCounts);

  };

  useEffect(() => {
    fetchCategoryCounts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(categoryCounts).map(([category, count]) => (
        <div key={category} className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-lg font-semibold">{count}</p>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryStats;
