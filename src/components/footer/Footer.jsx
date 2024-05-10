import '../footer/Footer.css'
import whatsapp from '../../assets/icons/whatsapp.png'
import ubicacion from '../../assets/icons/ubicacion.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'
import Jgceramica from '../../assets/icons/jgceramica.png';




export default function Footer() {


    return (
        <>
            <footer>
                <div className='container-icons'>
                    <div>
                        <h2 className='h2-footer'>Contacto</h2>
                        <picture className='icons-contacto'>
                            <a target='_blank' className='a-icon' href="https://wa.me/+5493704380459"><img className='icon' src={whatsapp} alt="icono de whatsapp" /> +5493704380459</a>
                            <a target='_blank' className='a-icon' href="" style={{ marginTop: '1rem' }}><img className='icon' src={ubicacion} alt="icono de ubicacion" /> Córdoba, Capital</a>
                        </picture>
                    </div>
                    <div style={{ width: '17%' }}>
                        <img src={Jgceramica} style={{ width: '100%' }} alt="" />
                    </div>

                    <div>
                        <h2 className='h2-footer'>Redes Sociales</h2>
                        <picture className='icons-redes'>
                            <a target='_blank' className='a-icon' href="https://www.facebook.com/profile.php?id=100072114314604"><img className='icon2' src={facebook} alt="icono de facebook" /></a>
                            <a target='_blank' className='a-icon' href="https://www.instagram.com/jgceramicaa/"><img className='icon2' src={instagram} alt="icono de instagram" /></a>
                            <a target='_blank' className='a-icon' href=""><img className='icon2' src={twitter} alt="icono de twitter" /></a>
                        </picture>
                        <h3 className='h3-footer'>JG Cerámica</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}