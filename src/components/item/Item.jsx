
import {Link} from 'react-router-dom' 
import '../item/item.css'



export default function Item({id, name, img, price}) {


    return (
    <>
        <article className='item-container'>
            <h3>{name}</h3>
            <img src={img} alt={name} style={{width: '100%'}}/>
            <p style={{fontWeight: '500', padding: '1rem'}}>Precio: ${price}</p>
            <Link to={`/item/${id}`} style={{fontSize: '1.5rem'}}><button className='buttonCard'>ver detalles</button></Link>
        </article>
    </>
    )
}