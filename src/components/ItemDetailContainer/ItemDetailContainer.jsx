import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getDoc, doc} from "firebase/firestore"
import ItemDetail from "../itemdetail/ItemDetail";
import {db} from '../../../firebase'
import ReactLoading from 'react-loading';



export default function ItemDetailContainer() {
    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState(true)


    const {itemId} = useParams();


    useEffect(() => {
        setLoading(true)

        const docRef = doc(db,"products", itemId)

        getDoc(docRef)
            .then((resp) => {
                setItem(
                    {...resp.data(), id: resp.id}
                )
                
            })
            .catch( error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])


    return (
    <>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {loading ? (
            <ReactLoading type="spin" style={{width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center',  fill:"#a85e9e"}} />
            ) : (
                <ItemDetail {...item}/>
            )}
        </div>
     
    </>
    )
}