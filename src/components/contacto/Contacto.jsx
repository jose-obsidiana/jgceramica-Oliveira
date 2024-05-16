import { useState } from 'react'
import '../contacto/Contacto.css'
import Swal from "sweetalert2";
import whatsapp from '../../assets/icons/w1.png'
import ubicacion from '../../assets/icons/u1.png'
import gmail from '../../assets/icons/g1.png'



export default function Contacto() {
    const [input, setInput] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        limpiarFormulario()
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Tu mensaje ha sido enviado con éxito!",
            showConfirmButton: false,
            timer: 3000,
            width: '50rem',
            height: '50rem',
            customClass: {
                icon: 'icon-alert'
            }
        });
    }

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const limpiarFormulario = () => {
        setInput({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            mensaje: ''
        });
    };


    return (
        <>
            <h1>Contacto</h1>

            <div className='container-flex container-margin'>

                <section className='section-cont'>
                    <h2 className='h2-contacto'>Otra forma de Contactarte con Nosotros</h2>
                    <picture className='icons-contacto'>
                        <a target='_blank' className='icon-cont' href="https://wa.me/+5493704380459"><img className='img-cont' src={whatsapp} alt="icono de whatsapp" /> +5493704380459</a>
                        <a target='_blank' className='icon-cont' href="" style={{ marginTop: '1rem' }}><img className='img-cont img-ubic' src={gmail} alt="icono de ubicacion" /> jimenagalvan@gmail.com</a>
                        <a target='_blank' className='icon-cont' href="" style={{ marginTop: '1rem' }}><img className='img-cont' src={ubicacion} alt="icono de ubicacion" /> Córdoba, Capital</a>
                    </picture>
                </section>

                <div className='border-left'>
                    <form action="" onSubmit={handleSubmit} className="container-form">

                        <div className='nombre'>
                            <input className='input-contacto'
                                type="text"
                                name='nombre'
                                value={input.nombre}
                                onChange={handleInput} required
                                placeholder='Nombre' />
                        </div>

                        <div className='apellido'>
                            <input className='input-contacto'
                                type="text"
                                name='apellido'
                                value={input.apellido}
                                onChange={handleInput} required
                                placeholder='Apellido' />
                        </div>

                        <div className='email'>
                            <input className='input-contacto'
                                type="email"
                                name='email'
                                value={input.email}
                                onChange={handleInput} required
                                placeholder='E-mail' />
                        </div>

                        <div className='telefono'>
                            <input className='input-contacto'
                                type="number"
                                name='telefono'
                                value={input.telefono}
                                onChange={handleInput}
                                placeholder='Teléfono' />
                        </div>

                        <div className='mensaje'>
                            <textarea className='input-contacto'
                                type="text"
                                name='mensaje'
                                value={input.mensaje}
                                onChange={handleInput}
                                style={{ height: '10rem' }} required
                                placeholder='Mensaje' />
                        </div>

                        <div className='submit'>
                            <button className='button-enviar' type="submit" >Enviar</button>

                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}