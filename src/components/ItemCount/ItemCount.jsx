
import '../ItemCount/ItemCount.css'
import { useState } from 'react';


export default function ItemCount({stock, onAdd}) {
    const [cont, setCont] = useState(1);
    
    const clickInc = () => {
        if (cont < stock) {
            setCont (cont + 1);
        }
    }

    const clickDec = () => {
        if (cont > 1) {
        setCont (cont - 1);

        }
    }


    return (
        <>
            <div className='containerCont'>
                <section className='contador'>
                    <button className='buttonCont' onClick={clickDec}>-</button>
                    <p className='numCont'>{cont}</p>
                    <button className='buttonCont' onClick={clickInc}>+</button>
                </section>
                <button className='buttonCard' onClick={() => onAdd(cont)} disabled={!stock} >agregar al carrito</button>
            </div>
        </>
    )
}
