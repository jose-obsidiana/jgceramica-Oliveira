import {useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../AsyncMock";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'



export default function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState ([]);

    const {categoryId} = useParams()

    useEffect (() => {
        const categoryProduct = categoryId ? getProductsByCategory : getProducts
    
        categoryProduct(categoryId)
            .then (response => {
                setProducts(response)
                console.log('filtrando')
            })
    }, [categoryId])




    return (
        <>
            <h1>{categoryId}</h1>
            <ItemList products={products}/>
        </>
    )
}
