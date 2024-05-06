
import { Link } from 'react-router-dom'
import '../item/item.css'



export default function Item({ id, name, img, price }) {


    return (
        <>
            <div>
                <article className='item-container'>
                    <img src={img} alt={name} style={{ width: '100%' }} />
                    <h3 className='titulo-item'>{name}</h3>


                    <p style={{ fontWeight: '500', padding: '0.3rem', fontSize: '1.8rem' }}> ${price}</p>
                    <Link to={`/item/${id}`} style={{ fontSize: '1.5rem' }}><button className='buttonCard' style={{ textTransform: 'lowercase' }}>ver detalles</button></Link>
                </article>
            </div>
        </>
    )
}