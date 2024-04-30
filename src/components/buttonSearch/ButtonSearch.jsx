import { useState } from 'react';
import { filterByName } from '../../../firebase';
import '../buttonSearch/ButtonSearch.css'


export default function ButtonSearch() {

    const [inputValue, setInputValue] = useState('')
    const [filterProducts, setFilterProducts] = useState([])


    const handleChange = (event) => {
        setInputValue(event.target.value)
    }


    const handleClick = async () => {
        const productosFiltrados = await filterByName(inputValue);
        setFilterProducts(productosFiltrados);
    }


    return (
        <>
            <div className="search">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 input-search" type="search" placeholder="" aria-label="Search" value={inputValue} onChange={handleChange} />
                    <button className="btn-search" type="button" onClick={handleClick}>Buscar</button>
                </form>
            </div>

            {filterProducts.map((prod) => (<li key={prod.id}>{prod.name} ${prod.price}</li>))}
        </>
    )
}