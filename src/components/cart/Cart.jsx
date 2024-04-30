import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import '../cart/Cart.css'
import eliminar from '../../assets/icons/eliminar.png';



export default function Cart() {

    const { cart, clearCart, removeItem, precioTotal } = useContext(CartContext)


    return (
        <>
            <h1>Carrito</h1>
            <div className="container-carrito" >
                {
                    cart.map((prod) => (
                        <div key={prod.id} className="container-lista">
                            <section className="containerCart"  >
                                <img className="img-cart" src={prod.img} alt={prod.name} />
                                <h2 style={{ marginRight: '10rem' }}>{prod.name} </h2>
                                <h3>Precio: ${prod.price}</h3>
                                <h4>Cantidad: {prod.quantity}</h4>
                                <h3>Total: ${prod.price * prod.quantity}</h3>
                                <button className="button-eliminar" onClick={() => removeItem(prod.id)} >
                                    <img className="img-eliminar" src={eliminar} alt='eliminar producto' />
                                </button>
                            </section>
                        </div>
                    ))
                }
                {cart.length > 0 ?
                    <>
                        <button onClick={() => clearCart()} className="buttonCard clear-cart">Limpiar Carrito</button>
                        <div className="container-resumen">
                            <h2 className='lista-cart' style={{ marginBottom: '3rem' }}>Resumen de Compra</h2>
                            <h3>Precio Total: ${precioTotal()}</h3>
                            <Link to='/checkout'><button className="buttonCard iniciar-compra">Iniciar Compra</button></Link>
                        </div>
                    </> :
                    (<div>
                        <h2 style={{ paddingLeft: '5rem' }}>No hay Items en el carrito</h2>
                        <Link to='/'><button className="button-compra">Ir a Productos</button></Link>
                    </div>)}
            </div>
        </>
    )
}