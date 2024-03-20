import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget";
import botonCerrar from '../../assets/icons/cerrar.png';
import '../NavBar/NavBar.css';

export default function NavBar({category}) {
    const logoEstilos = {
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center'
    };

    const handleNavLinkClick = () => {
        window.location.href = '/';
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick2 = () => {
        setIsOpen(!isOpen);
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
                                    <img src={botonCerrar} className="icon-cerrar"  alt="boton-cerrar" />
                                </button>
                                <h5 className="offcanvas-title titulo-boot" id="offcanvasNavbarLabel">JG CERÁMICA</h5>
                                <CartWidget/>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item dropdown">
                                        <NavLink to="/" className="enlaceNavBar dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleNavLinkClick}>
                                            Productos
                                        </NavLink>
                                        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} onClick={closeDropdown}>
                                        <li><NavLink to='/category/jarras' className="dropdown-item a-prod">Jarras</NavLink></li>
                                        <li><NavLink to='/category/tazas' className="dropdown-item a-prod">Tazas</NavLink></li>
                                        <li><NavLink to='/category/cuencos' className="dropdown-item a-prod">Cuencos</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/talleres" className="enlaceNavBar" onClick={closeDropdown}>Talleres</NavLink></li>
                                    <li><NavLink to="/contacto" className="enlaceNavBar" onClick={closeDropdown}>Contacto</NavLink></li>
                                    <li><NavLink to="/sobremi" className="enlaceNavBar" onClick={closeDropdown}>Sobre mí</NavLink></li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>    
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
                    <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
                        <NavLink to="/" className="enlaceNavBar dropdown-toggle" role="button" onClick={handleNavLinkClick2}>
                            Productos
                        </NavLink>
                        <ul className={`dropdown-menu menu-productos ${isOpen ? 'show' : ''}`}>
                            <li><NavLink to='/category/jarras' className="dropdown-item a-prod">Jarras</NavLink></li>
                            <li><NavLink to='/category/tazas' className="dropdown-item a-prod">Tazas</NavLink></li>
                            <li><NavLink to='/category/cuencos' className="dropdown-item a-prod">Cuencos</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/talleres" className='enlaceNavBar'>talleres</NavLink></li>
                    <li><NavLink to="/contacto" className='enlaceNavBar'>contacto</NavLink></li>
                    <li><NavLink to="/sobremi" className='enlaceNavBar'>sobre mí</NavLink></li>
                </ul>
            </div>
                <div className="search">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
                        <button className="btn-search" type="submit">Buscar</button>
                    </form>
                    <CartWidget/>
                </div>
            </nav>  
        </>
    );
}
