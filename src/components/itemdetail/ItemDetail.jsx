
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../itemdetail/itemDetail.css'
import Billete from '../../assets/icons/billete.png';



export default function ItemDetail({ id, name, price, stock, description, img, category }) {

    const [cantidadAgregada, setCantidadAgregada] = useState('0')

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)

        const item = { id, name, price, img }

        addItem(item, quantity)

    }

    const estilos = {
        marginTop: '1rem',
        fontSize: '1.8rem'
    }

    return (
        <>
            <div className='itemDetail-margin'>
                <article className='itemdetail-container '>
                    <nav className='nav-itemdetail'>
                        <Link to='/' >Inicio /</Link>
                        <Link to={`/category/${category}`}> {category} /</Link>
                        <Link className='link'> {name}</Link>
                    </nav>
                    <picture className='picture-item'>
                        <img className='img-detail' src={img} alt={name} />
                    </picture>
                    <header className='itemdetail-titulo'>
                        <h2 >{name}</h2>
                    </header>

                    <section className='item-description'>
                        <p className='p-description'>{description}</p>
                        <p className='p-description' style={{ fontWeight: '400', ...estilos, fontSize: '3.5rem' }}>${price}</p>
                        <p className='p-description' style={estilos}>stock: {stock}</p>
                        <div className='billete'>
                            <img style={{ width: '3rem', height: '3rem' }} src={Billete} alt='imagen de descuento' />
                            <p className='p-descuento'> <span>10%</span> de descuento abonando con transferencia</p>
                        </div>
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