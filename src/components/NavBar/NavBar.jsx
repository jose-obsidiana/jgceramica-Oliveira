import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import botonCerrar from '../../assets/icons/cerrar.png';
import '../NavBar/NavBar.css';
import ButtonSearch from '../buttonSearch/ButtonSearch';
import CartWidget from '../cartWidget/CartWidget'
import Jgceramica from '../../assets/icons/jgceramica.png';



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



    // const closeNavMenu = () => {
    //     // Cierra el menú de navegación cuando se hace clic en un enlace
    //     const navMenu = document.getElementById('navbarSupportedContent');
    //     if (navMenu.classList.contains('show')) {
    //         navMenu.classList.remove('show');
    //     }
    // };


    return (
        <>
            <div className="navBar-boot " >
                <nav className="navbar fixed-top" id='padding'>
                    <div className="container-fluid boot-estilos">
                        <button className="navbar-toggler   " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className=" icon-menu"></span>
                        </button>
                        <NavLink to="/" className="titulo-boot" style={logoEstilos}>
                            <img style={{ width: '100%' }} src={Jgceramica} alt="" />
                        </NavLink>


                        <div className="offcanvas offcanvas-start menu-desplegable" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header menu-boot">
                                <button type="button" data-bs-dismiss="offcanvas" className="boton-cerrar" aria-label="Close">
                                    <img src={botonCerrar} className='icon-cerrar' alt="" />
                                </button>
                                <h5 className="offcanvas-title titulo-boot" id="offcanvasNavbarLabel">JG CERÁMICA</h5>
                                <CartWidget />
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <NavLink to='/' className="nav-link dropdown-toggle enlaceNavBar " role="button" aria-expanded="false">
                                            Productos
                                        </NavLink>
                                        <ul className={`dropdown-menu menu-productos ${isDropdownOpen ? 'show' : ''}`}>
                                            <li><NavLink to='/category/Tazas' className="dropdown-item lista-nav">Tazas</NavLink></li>
                                            <li><NavLink to='/category/Jarras' className="dropdown-item lista-nav">Jarras</NavLink></li>
                                            <li><NavLink to='/category/Cuencos' className="dropdown-item lista-nav">Cuencos</NavLink></li>
                                            <li><NavLink to='/category/Horneros' className="dropdown-item lista-nav">Horneros</NavLink></li>
                                            <li><NavLink to='/category/Cazuelas' className="dropdown-item lista-nav">Cazuelas</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/talleres" className="enlaceNavBar" >Talleres</NavLink></li>
                                    <li><NavLink to="/contacto" className="enlaceNavBar" >Contacto</NavLink></li>
                                    <li style={{ marginBottom: '2rem' }}><NavLink to="/sobremi" className="enlaceNavBar" >Sobre mí</NavLink></li>

                                </ul>
                                <ButtonSearch />
                            </div>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            </div>

            <nav className="navBar">
                <NavLink to="/" className="titulo-boot" style={logoEstilos}>
                    <img style={{ width: '100%' }} src={Jgceramica} alt="" />
                </NavLink>
                <div>
                    <ul className="navBar-link">
                        <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <NavLink to="/" className=" dropdown-toggle enlaceNavBar" role="button" aria-expanded="false">
                                Productos
                            </NavLink>
                            <ul className={`dropdown-menu menu-productos ${isDropdownOpen ? 'show' : ''}`}>
                                <li><NavLink to='/category/Tazas' className="lista-prod">Tazas</NavLink></li>
                                <li><NavLink to='/category/Jarras' className="lista-prod">Jarras</NavLink></li>
                                <li><NavLink to='/category/Cuencos' className="lista-prod">Cuencos</NavLink></li>
                                <li><NavLink to='/category/Horneros' className="lista-prod">Horneros</NavLink></li>
                                <li><NavLink to='/category/Cazuelas' className="lista-prod">Cazuelas</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/talleres" className='enlaceNavBar'>talleres</NavLink></li>
                        <li><NavLink to="/contacto" className='enlaceNavBar'>contacto</NavLink></li>
                        <li><NavLink to="/sobremi" className='enlaceNavBar'>sobre mí</NavLink></li>
                    </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ButtonSearch />
                    <CartWidget />
                </div>
            </nav>
        </>
    );
}
