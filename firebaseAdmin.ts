// firebaseAdmin.ts
import * as admin from 'firebase-admin';

// Check if we've already initialized an instance of Firebase Admin to avoid initializing it multiple times
if (!admin.apps.length) {
  // Retrieve the encoded service account from the environment variable
  const base64ServiceAccount = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_BASE64;
  if (!base64ServiceAccount) {
    throw new Error('FIREBASE_ADMIN_SERVICE_ACCOUNT_BASE64 environment variable is not set.');
  }

  // Decode the service account from Base64 to a string
  const decodedServiceAccount = Buffer.from(base64ServiceAccount, 'base64').toString('ascii');

  // Parse the service account JSON string into an object
  const serviceAccount = JSON.parse(decodedServiceAccount);

  // Initialize Firebase Admin with the service account
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  
}

export default admin;
