import { useContext } from 'react';
import carrito from '../../assets/icons/carrito.png';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../cartWidget/CartWidget.css'


export default function CartWidget() {

    const estilosCart = {
        width: '20px',
        height: '18px',
        top: '50%'
    }

    const contCart = {
        paddingLeft: '2px'
    }


    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            <div className='container-cart'>
                <Link className='container-cart' to='/cart'>
                    <img style={estilosCart} src={carrito} alt="icon-carrito" />
                    <p style={contCart}>{totalQuantity()}</p>
                </Link>
            </div>
        </>
    )
}