// CONFIGURATION FIREBASE PERSONNELLE - TECH-NIGER
// Connecté au compte anarouachamsoudine010@gmail.com

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcorwAaxNHtE8774nuruHTHMjtaRSZlvk",
  authDomain: "techniger-boutique.firebaseapp.com",
  projectId: "techniger-boutique",
  storageBucket: "techniger-boutique.firebasestorage.app",
  messagingSenderId: "931204128922",
  appId: "1:931204128922:web:edd69ce71239dd1076ff23",
  measurementId: "G-Z1WTMBJECR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Fonctions d'export pour les pages
export { collection, addDoc, getDocs, query, orderBy, onSnapshot };
