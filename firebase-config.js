export const firebaseConfig = {
 apiKey: window._env_.FIREBASE_API_KEY,
 authDomain: `${window._env_.FIREBASE_PROJECT_ID}.firebaseapp.com`,
 projectId: window._env_.FIREBASE_PROJECT_ID,
 storageBucket: `${window._env_.FIREBASE_PROJECT_ID}.appspot.com`,
 messagingSenderId: window._env_.FIREBASE_MESSAGING_SENDER_ID,
 appId: window._env_.FIREBASE_APP_ID
};