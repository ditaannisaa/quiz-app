import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDEe72eawclLO5JjlV7CQ4-ZdtY-A0mVD4',
  authDomain: 'quiz-app-6f523.firebaseapp.com',
  projectId: 'quiz-app-6f523',
  storageBucket: 'quiz-app-6f523.appspot.com',
  messagingSenderId: '988122172280',
  appId: '1:988122172280:web:00fb128f4d19b3941d168d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Android: 988122172280-ge90gm98il0h96pqeio2f180831vg351.apps.googleusercontent.com
