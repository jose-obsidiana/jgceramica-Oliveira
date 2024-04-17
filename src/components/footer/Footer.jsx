import '../footer/Footer.css'
import whatsapp from '../../assets/icons/whatsapp.png'
import ubicacion from '../../assets/icons/ubicacion.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'



export default function Footer() {
  

    return (
        <>
            <footer>
                <div className='container-icons'>
                    <picture className='icons-contacto'>
                        <a target='_blank' className='a-icon' href="https://wa.me/+5493704380459"><img className='icon' src={whatsapp} alt="icono de whatsapp" /> +54 9 3704 38 0459</a>
                        <a target='_blank' className='a-icon' href=""><img className='icon' src={ubicacion} alt="icono de ubicacion" /> Córdoba, Capital</a>
                    </picture>
                    <div>
                        <h1 className='h1-footer'>jg cerámica</h1>
                    </div>
                    <picture className='icons-redes'>
                        <a target='_blank' className='a-icon' href="https://www.facebook.com/profile.php?id=100072114314604"><img className='icon2' src={facebook} alt="icono de facebook" /></a>
                        <a target='_blank' className='a-icon' href="https://www.instagram.com/jgceramicaa/"><img className='icon2' src={instagram} alt="icono de instagram" /></a>
                        <a target='_blank' className='a-icon' href=""><img className='icon2' src={twitter} alt="icono de twitter" /></a>
                    </picture>
                </div>
            </footer>
        </>
    )
}