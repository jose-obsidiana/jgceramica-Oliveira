
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import '../itemdetail/itemDetail.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'




export default function ItemDetail({ id, name, price, stock, description, img }) {

    const [cantidadAgregada, setCantidadAgregada] = useState('0')

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)

        const item = { id, name, price, img }

        addItem(item, quantity)

    }

    const estilos = {
        marginTop: '1.5rem',
        fontSize: '2rem'
    }

    return (
        <>
            <div className='container-margin itemDetail-margin '>
                <article className='itemdetail-container'>
                    <Link to='/' className='button-volver' style={{ marginTop: '5rem' }}>Volver</Link>
                    <picture className='picture-item'>
                        <img className='img-detail' src={img} alt={name} />
                    </picture>
                    <header className='itemdetail-titulo'>
                        <h2 >{name}</h2>
                    </header>

                    <section className='item-description'>
                        <p style={estilos}>{description}</p>
                        <p style={{ fontWeight: '400', ...estilos, fontSize: '4rem' }}>${price}</p>
                        <p style={estilos}>Stock: {stock}</p>
                    </section>

                    <div className='item-count'>
                        {
                            cantidadAgregada > 0 ?
                                (
                                    <div className='botones'>
                                        <Link to='/' > <button className='buttonCard button-detail' >Seguir Comprando</button></Link>
                                        <Link to='/cart' > <button className='buttonCard button-detail' >Finalizar compra</button></Link>
                                    </div>
                                ) :
                                (<ItemCount stock={stock} onAdd={handleOnAdd} />)
                        }
                    </div>
                </article>
            </div>
        </>
    )
}