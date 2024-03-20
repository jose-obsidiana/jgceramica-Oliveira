import ItemCount from '../ItemCount/ItemCount'
import '../itemdetail/itemDetail.css'


export default function ItemDetail({id, name, price, stock, category, description, img}) {

    const estilos = {
        marginTop: '1.5rem'
    }

    return (
        <>
            <article className='itemdetail-container'>
            <picture>
                    <img src={img} alt={name} />    
                </picture>
                <header >
                    <h2 className='itemdetail-titulo'>{name}</h2>
                </header>
                <section className='item-description'>
                    <p style={estilos}>Categoría: {category}</p>
                    <p style={estilos}>{description}</p>
                    <p style={{fontWeight: 'bold', ...estilos}}>Precio: ${price}</p>
                    <p style={estilos}>Stock: {stock}</p>
                </section>
                <footer className='item-count'> 
                    <ItemCount  stock={stock} onAdd={(cont) => console.log('Cantidad agregada: ', cont)} /> 
                </footer>
            </article>
        </>
    )
}