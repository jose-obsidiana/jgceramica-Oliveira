import { useEffect, useState } from "react"
import { getTalleres } from "../../../firebase"
import '../talleres/Talleres.css'
import ReactLoading from 'react-loading';


export default function Talleres() {
    const [talleres, setTalleres] = useState([])
    const [loading, setLoading] = useState(true)

    async function obtenerTalleres() {
        const talleresFirebase = await getTalleres()
        setTalleres(talleresFirebase)
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            obtenerTalleres()
            setLoading(false)
        }
        fetchData()
    }, [])


    return (
        <>
            <h1>Talleres</h1>
            <div className="container-margin">
                {loading ? (
                    <ReactLoading type="spin" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', fill: "#a85e9e" }} />
                ) : (

                    <ul class="cards">
                        <li class="cards__item">
                            <div class="card">
                                <div class="card__image card__image--fence"></div>
                                <div class="card__content">
                                    <div class="card__title">Introducción a la Cerámica</div>
                                    <div class="card__text">
                                        <li className="li-taller"><span>Descripción:</span> Taller básico para principiantes que cubre técnicas fundamentales de cerámica</li>
                                        <li className="li-taller"><span>Duración:</span> 4 semanas</li>
                                        <li className="li-taller"><span>Nivel:</span> Principiante</li>
                                        <li className="li-taller"><span> Instructora:</span> Jimena Galván</li>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards__item">
                            <div class="card">
                                <div class="card__image card__image--river"></div>
                                <div class="card__content">
                                    <div class="card__title">Decoración de Cerámica</div>
                                    <div class="card__text">
                                        <li className="li-taller"><span>Descripción:</span> Aprende técnicas de esmaltes y decoración para embellecer tus piezas de cerámica.</li>
                                        <li className="li-taller"><span>Duración: </span>3 semanas</li>
                                        <li className="li-taller"><span>Nivel: </span>Intermedio</li>
                                        <li className="li-taller"><span> Instructora:</span> Jimena Galván</li>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards__item">
                            <div class="card">
                                <div class="card__image card__image--record"></div>
                                <div class="card__content">
                                    <div class="card__title">Torno de Cerámica Avanzado</div>
                                    <div class="card__text">
                                        <li className="li-taller"><span>Descripción:</span> Un taller avanzado que se centra en el uso del torno de cerámica para crear piezas complejas.</li>
                                        <li className="li-taller"><span>Duración:</span> 6 semanas</li>
                                        <li className="li-taller"><span>Nivel:</span> Avanzado</li>
                                        <li className="li-taller"><span> Instructora:</span> Jimena Galván</li>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        </>
    )
}