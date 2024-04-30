import { useState } from 'react'
import '../contacto/Contacto.css'
import Swal from "sweetalert2";


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

            <div className='container-flex'>
                <form action="" onSubmit={handleSubmit} className="container-form">
                    <div className='nombre'>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name='nombre'
                            value={input.nombre}
                            onChange={handleInput} required />
                    </div>

                    <div className='apellido'>
                        <label>Apellido</label>
                        <input type="text"
                            name='apellido'
                            value={input.apellido}
                            onChange={handleInput} required />
                    </div>

                    <div className='email'>
                        <label>E-mail</label>
                        <input
                            type="email"
                            name='email'
                            value={input.email}
                            onChange={handleInput} required />
                    </div>

                    <div className='telefono'>
                        <label>Teléfono (opcional)</label>
                        <input
                            type="number"
                            name='telefono'
                            value={input.telefono}
                            onChange={handleInput} />
                    </div>

                    <div className='mensaje'>
                        <label>Mensaje</label>
                        <textarea type="text"
                            name='mensaje'
                            value={input.mensaje}
                            onChange={handleInput}
                            style={{ height: '10rem' }} required />
                    </div>

                    <div className='submit'>
                        <button className='button-enviar' type="submit" >Enviar</button>
                    </div>
                </form>
            </div>

        </>
    )
}