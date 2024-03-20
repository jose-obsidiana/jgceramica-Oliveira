import { useState, useEffect } from "react";
import { getProductById } from "../../AsyncMock";
import { useParams } from "react-router-dom"
import ItemDetail from "../itemdetail/ItemDetail";



export default function ItemDetailContainer() {
    const [product, setProduct] = useState (null)

    const {itemId} = useParams();

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        }, [itemId])

    },)

    return (
    <>
        <div>
            <ItemDetail {...product}/>
        </div>
    </>
    )
}