import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyDl_heCelOuNWZu5b1sk2rJ5BufdhPt24o",
authDomain: "t-movie-app.firebaseapp.com",
projectId: "t-movie-app",
storageBucket: "t-movie-app.appspot.com",
messagingSenderId: "407220742016",
appId: "1:407220742016:web:0a0447b22217dd89d7c365"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
