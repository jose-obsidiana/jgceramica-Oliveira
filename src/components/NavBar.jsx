import EnlaceComponent from "./EnlaceComponent";
import CartWidget from "./CartWidget";
import './NavBar.css';


export default function NavBar () {
    const logoEstilos = {
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center'
    }

    return (
    <>
        <nav className="navBar">
            <h2 style={logoEstilos}>JG Cerámica</h2>
            <div>
                <ul className="navBar-link">
                    <li><EnlaceComponent href='#' texto='productos'/></li>
                    <li><EnlaceComponent href='#' texto='talleres'/></li>
                    <li><EnlaceComponent href='#' texto='contacto'/></li>
                    <li><EnlaceComponent href='#' texto='sobre mí'/></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    </>
    )

}