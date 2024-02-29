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
            <div className="navBar-link">
                <EnlaceComponent href='#' texto='productos'/>
                <EnlaceComponent href='#' texto='talleres'/>
                <EnlaceComponent href='#' texto='contacto'/>
                <EnlaceComponent href='#' texto='sobre mí'/>
            </div>
            <CartWidget/>
        </nav>
    </>
    )

}