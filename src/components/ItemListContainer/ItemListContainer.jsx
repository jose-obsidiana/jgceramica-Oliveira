import {useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import {db } from '../../../firebase'
import ReactLoading from 'react-loading';





export default function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {
        setLoading(true)

        const collectionRef = collection(db, 'products')
        const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef

        getDocs(q)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally (() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <>
            <h1>{greeting}</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {loading ? (
            <ReactLoading type="spin" style={{width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center',  fill:"#a85e9e"}} />
            ) : (
                <ItemList products={products}/>
            )}
            </div>
           
        </>
    )
}
