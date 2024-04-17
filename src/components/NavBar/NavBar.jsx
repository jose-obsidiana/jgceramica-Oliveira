import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import botonCerrar from '../../assets/icons/cerrar.png';
import '../NavBar/NavBar.css';
import ButtonSearch from '../buttonSearch/ButtonSearch';
import CartWidget from '../cartWidget/CartWidget'


export default function NavBar() {
    const logoEstilos = {
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center'
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };


    return (
        <>
            <div className="navBar-boot">
                <nav className="navbar fixed-top ">
                    <div className="container-fluid boot-estilos">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="icon-boot"></span>
                        </button>           
                        <NavLink to="/" className="titulo-boot">JG cerámica</NavLink>

                        
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header menu-boot">
                                <button type="button" data-bs-dismiss="offcanvas" className="boton-cerrar" aria-label="Close">
                                    <img src={botonCerrar} className='icon-cerrar' alt="" />
                                    </button>
                                <h5 className="offcanvas-title titulo-boot" id="offcanvasNavbarLabel">JG CERÁMICA</h5>
                                <CartWidget/>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <NavLink to='/' className="nav-link dropdown-toggle enlaceNavBar " role="button"  aria-expanded="false">
                                    Productos
                                </NavLink>
                                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                    <li><NavLink to='/category/tazas' className="dropdown-item">Tazas</NavLink></li>
                                    <li><NavLink to='/category/cuencos' className="dropdown-item">Cuencos</NavLink></li>
                                    <li><NavLink to='/category/jarras' className="dropdown-item">Jarras</NavLink></li>
                                </ul>
                                </li>
                                    <li><NavLink to="/talleres" className="enlaceNavBar" >Talleres</NavLink></li>
                                    <li><NavLink to="/contacto" className="enlaceNavBar" >Contacto</NavLink></li>
                                    <li><NavLink to="/sobremi" className="enlaceNavBar" >Sobre mí</NavLink></li>

                                </ul>
                                <ButtonSearch/>  
                            </div>
                        </div>
                        <CartWidget/>
                    </div>
                </nav>
            </div>

            <nav className="navBar">
            <NavLink to="/" className="titulo-boot" style={logoEstilos}>JG cerámica</NavLink>
            <div>
                <ul className="navBar-link">
                <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <NavLink to="/" className=" dropdown-toggle enlaceNavBar" role="button"  aria-expanded="false">
                        Productos
                    </NavLink>
                    <ul className={`dropdown-menu menu-productos ${isDropdownOpen ? 'show' : ''}`}>
                        <li><NavLink to='/category/tazas' className="dropdown-item">Tazas</NavLink></li>
                        <li><NavLink to='/category/cuencos' className="dropdown-item">Cuencos</NavLink></li>
                        <li><NavLink to='/category/jarras' className="dropdown-item">Jarras</NavLink></li>
                    </ul>
                    </li>
                    <li><NavLink to="/talleres" className='enlaceNavBar'>talleres</NavLink></li>
                    <li><NavLink to="/contacto" className='enlaceNavBar'>contacto</NavLink></li>
                    <li><NavLink to="/sobremi" className='enlaceNavBar'>sobre mí</NavLink></li>
                </ul>
            </div>
            <ButtonSearch/>
            <CartWidget/>
            </nav>  
        </>
    );
}