
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, addDoc } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//obtener productos (async await)
export async function getProductsFirebase() {
  const response = await getDocs(collection(db, 'products'))

  const listaProducts = []
  response.forEach(doc => listaProducts.push({ id: doc.id, ...doc.data() }))
  // console.log(listaProducts)
  return listaProducts;
}

// filtrar por nombre
export async function filterByName(byName) {
  const xName = byName.toLowerCase()
  // creamos la query
  const q = query(collection(db, 'products'), where('name', '==', xName))
  // ejecutamos la query
  const querySnapshot = await getDocs(q);

  // filtramos los resultados
  const listaFiltro = [];
  querySnapshot.forEach((doc) =>
    listaFiltro.push({ id: doc.id, ...doc.data() })

  );
  return listaFiltro;
}


// obtener lista de talleres
export async function getTalleres() {
  const responseTalleres = await getDocs(collection(db, 'talleres'))
  const listaTalleres = []
  responseTalleres.forEach(taller => listaTalleres.push({ id: taller.id, ...taller.data() }))
  console.log(listaTalleres)
  return listaTalleres
}








