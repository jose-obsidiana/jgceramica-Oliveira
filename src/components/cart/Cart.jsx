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
            <div className="container-carrito container-margin" >

                <div className="container-lista">
                    {cart.length > 0 && (
                        <header className="prod-header">
                            <p></p>
                            <p>Producto</p>
                            <p>Precio</p>
                            <p>Cantidad</p>
                            <p>Total</p>
                        </header>
                    )}
                    {cart.length > 0 && (
                        <header className="header-mobile">
                            <p></p>
                            <p className="font-size">Prod.</p>
                            <p className="font-size">Precio</p>
                            <p className="font-size">Cant.</p>
                            <p className="font-size">Total</p>
                        </header>
                    )}

                    {
                        cart.map((prod) => (
                            <div key={prod.id} className="prod-id" >
                                <img className="img-cart" src={prod.img} alt={prod.name} />
                                <h2 className="prod-name">{prod.name} </h2>

                                <p className="prod-price">${prod.price}</p>
                                <p className="prod-quant">{prod.quantity}</p>
                                <p className="prod-total">${prod.price * prod.quantity}</p>

                                <button className="button-eliminar" onClick={() => removeItem(prod.id)} >
                                    <img className="img-eliminar" src={eliminar} alt='eliminar producto' />
                                </button>
                            </div>
                        ))
                    }
                </div>
                {cart.length > 0 ?
                    <>
                        <button onClick={() => clearCart()} className="buttonCard clear-cart uppercase">Limpiar Carrito</button>
                        <div className="container-resumen">
                            <h2 className='lista-cart' style={{ marginBottom: '3rem' }}>Resumen de Compra</h2>
                            <h3>Precio Total: ${precioTotal()}</h3>
                            <Link to='/checkout'><button className="buttonCard iniciar-compra uppercase">Finalizar Compra</button></Link>
                        </div>
                    </> :
                    (<div className="items-carrito" >
                        <h2>No hay Items en el carrito</h2>
                        <Link to='/'><button className="button-compra">Ir a Productos</button></Link>
                    </div>)}
            </div>
        </>
    )
}