import carrito from '../assets/icons/carrito.png';

export default function CartWidget () {

    const containerCart = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2rem'
    }

    const estilosCart = {
        width: '20px',
        height: '18px',
        top: '50%'

    }

    const contCart = {
        paddingLeft: '2px'
    }

    return (
        <>
            <div style={containerCart}>
                <img style={estilosCart} src={carrito} alt="icon-carrito"/>
                <p style={contCart}>0</p>
            </div>
        </>
    )
}