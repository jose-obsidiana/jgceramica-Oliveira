import carrito from '../assets/icons/carrito.png';

export default function CartWidget () {

    const containerCart = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    }

    const estilosCart = {
        width: '25px',
        height: '25px',
        top: '50%'

    }

    const contCart = {
        fontSize: '1.2rem',
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