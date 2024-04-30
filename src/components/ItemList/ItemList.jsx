import Item from '../item/Item'
import '../ItemList/itemList.css'

export default function ItemList({ products }) {

    return (
        <>
            <section className='itemlist-container'>
                {products.map((product) => (
                    <Item key={product.id} {...product} />
                ))
                }
            </section>
        </>
    )
}