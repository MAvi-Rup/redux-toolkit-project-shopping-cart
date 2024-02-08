import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCDf1xC_N2aw_vjjuayZG_uMAtiAPQhoY',
  authDomain: 'tech-next-9bd64.firebaseapp.com',
  projectId: 'tech-next-9bd64',
  storageBucket: 'tech-next-9bd64.appspot.com',
  messagingSenderId: '800599298386',
  appId: '1:800599298386:web:06d6c17b84b0e37272ea8b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
