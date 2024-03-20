import {useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../AsyncMock";
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState ([]);

    // products
    useEffect ( () => {
        getProducts
        .then (data => {
            setProducts(data)
            console.log(data)
        })
    }, [] )


    // // categories
    // const {categoryId} = useParams()

    // useEffect (() => {
    //     const categoryProduct = categoryId ? getProductsByCategory : getProducts
    
    //     categoryProduct(categoryId)
    //         .then (response => {
    //             setProducts(response)
    //             console.log('filtrando')
    //         })
    // }, [categoryId])


    return (
        <>
            <h1>{greeting}</h1>
            <div>
                <ItemList products={products}/>
            </div>
            {/* <h2>category {categoryId}</h2>   */}

        </>
    )
}
