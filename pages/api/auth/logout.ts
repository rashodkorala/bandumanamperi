// pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { logout } from  '@/src/Controller/authController'; // Use your auth controller's logout function
import { clearAuthCookies } from '@/utils/cookieHelper'; // Utility for clearing cookies

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    await logout(); // Use your auth controller's logout function
    clearAuthCookies(res); // Clear the session cookie
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error'});
  }
}
