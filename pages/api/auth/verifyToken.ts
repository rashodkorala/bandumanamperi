import admin from 'firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';


const verifyIdToken = async (req: NextApiRequest, res: NextApiResponse) => {
  // Ensure the request uses the POST method
  console.log('Verifying token');
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

 
  const token = req.headers.authorization?.split('Bearer ')[1];
  

  if (!token) {
    return res.status(401).json({ valid: false, error: "No token provided" });
  }
  
  try {
    const user = await admin.auth().verifyIdToken(token);

    if (!user) {
      return res.status(401).json({ valid: false, error: "Token verification failed" });
    }

    console.log('Token verified');
    res.status(200).json({ valid: true });
  } catch (error) {
    console.error(error);
    res.status(401).json({ valid: false, error: "Token verification failed at api end" });
  }
};

export default verifyIdToken;
