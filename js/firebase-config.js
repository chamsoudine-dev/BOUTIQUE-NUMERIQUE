// CONFIGURATION FIREBASE TECH-NIGER
// Ce fichier gère la connexion à la base de données pour l'ajout automatique de produits

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuration (Utilisation d'une instance de test pour le moment)
const firebaseConfig = {
  apiKey: "AIzaSyB-vX_v_EXAMPLE_KEY",
  authDomain: "techniger-boutique.firebaseapp.com",
  projectId: "techniger-boutique",
  storageBucket: "techniger-boutique.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction pour ajouter un produit (utilisée par admin.html)
export async function saveProduct(productData) {
  try {
    const docRef = await addDoc(collection(db, "produits"), {
      ...productData,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (e) {
    console.error("Erreur lors de l'ajout: ", e);
    throw e;
  }
}

// Fonction pour récupérer les produits (utilisée par index.html, etc.)
export async function fetchProducts() {
  const q = query(collection(db, "produits"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}
