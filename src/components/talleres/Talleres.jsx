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
            <div className="container-margin" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {loading ? (
                    <ReactLoading type="spin" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', fill: "#a85e9e" }} />
                ) : (
                    <section className="container-talleres">{
                        talleres.map((taller, index) => (
                            <div key={taller.id} className={`taller-${index} talleres`}>
                                <ul >
                                    <li><span>Nombre:</span> {taller.nombre}</li>
                                    <li><span>Duración:</span> {taller.duracion}</li>
                                    <li><span>Descripción:</span> {taller.descripcion}</li>
                                    <li><span>Nivel:</span> {taller.nivel}</li>
                                    <li><span>Instructora:</span> {taller.instructora}</li>
                                </ul>
                            </div>))
                    }
                        <div className="img-container">
                            <img className="img-taller1 img-taller" src="https://res.cloudinary.com/dit43qjpn/image/upload/c_crop,ar_1:1/v1713297601/clases2_gcwelh.png" alt="imagen de taller 1" />
                        </div>
                        <div className="img-container">
                            <img className="img-taller2 img-taller" src="https://res.cloudinary.com/dit43qjpn/image/upload/c_crop,ar_1:1/v1713297601/clases3_ahwl44.png" alt="imagen de taller 2" />
                        </div>
                        <div className="img-container">
                            <img className="img-taller3 img-taller" src="https://res.cloudinary.com/dit43qjpn/image/upload/c_crop,w_441,h_441,x_0,y_2,ar_1:1/v1713297601/clases_lgmim6.png" alt="imagen de taller 3" />
                        </div></section>
                )}
            </div>

        </>
    )
}