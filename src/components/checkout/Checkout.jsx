import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebase'
import '../checkout/Checkout.css'
import cohete from '../../assets/icons/cohete.png'
import casa from '../../assets/icons/casa.png'


export default function Checkout() {

    const { cart, clearCart, precioTotal } = useContext(CartContext)
    const [pedidoId, setPedidoId] = useState("")

    const { register, handleSubmit } = useForm()


    const comprar = (data) => {
        const pedido = {
            buyer: data,
            products: cart,
            total: precioTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const pedidosRef = collection(db, 'pedidos')
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                clearCart()
            })
    }

    if (pedidoId) {
        return (
            <div className='compra-realizada container-margin'>
                <h1>Muchas Gracias por tu Compra!</h1>
                <h2 className='h2-compra'>El id de tu pedido es: {pedidoId}</h2>
                <div className='alert-vendedora'>
                    <h3 >La vendedora se pondrá en contacto contigo a la brevedad! <img style={{ width: '6%' }} src={cohete} alt="" /></h3>
                </div>
            </div>
        )
    }


    return (
        <>
            <h1>Finalizar Compra</h1>
            <div className='container-checkout container-margin'>
                <div >
                    <form className='form-compra' onSubmit={handleSubmit(comprar)}>
                        <h2>Datos Personales</h2>
                        <input className='input-form' type="text" placeholder='Nombre Completo' {...register('name')} required />
                        <input className='input-form' type="phone" placeholder='DNI' {...register('dni')} required />
                        <input className='input-form' type="email" placeholder='E-mail' {...register('email')} required />
                        <input className='input-form' type="phone" placeholder='Teléfono' {...register('phone')} required />
                        <button className='button-compra' type='submit' style={{ width: '100%', fontWeight: '400' }} >Comprar</button>
                    </form>
                </div>

                <div className='form-compra display-none' style={{ height: '28%' }}>
                    <section className='container-espera'>
                        <picture className='img-container'>
                            <img className='img-casa' src={casa} alt="imagen espera de entrega" />
                        </picture>
                        <h4 className='entrega'>Entrega</h4>
                    </section>
                    <p className='p-espera'>Esperando que se complete la información.</p>
                </div>

                <div className="form-compra">
                    <h2 className='lista-cart'>Resumen de Compra</h2>
                    {cart.map((prod) => (
                        <div key={prod.id} className="resumen-checkout">
                            <img style={{ width: '15%', padding: '1rem', paddingLeft: '0' }} src={prod.img} alt="" />
                            <h4>{prod.name} x{prod.quantity}</h4>
                        </div>))
                    }
                    <h3 style={{ marginTop: '2rem', fontWeight: '500' }}>Precio Total: ${precioTotal()}</h3>
                </div>
            </div >
        </>
    )
}