import '../sobremi/Sobremi.css'

export default function SobreMi() {

    return (
        <>
            <h1>Sobre Mí</h1>
            <div className="container-bio container-margin">
                <picture className='container-img'>
                    <img className='img-bio img-mobile' src="https://res.cloudinary.com/dit43qjpn/image/upload/v1713221792/nbxhtbpfef40r62t9lf0.png" alt="imagen biográfica" />
                </picture>
                <article className='bio'>
                    <p className='parrafo-bio'>Soy Jimena Galván, una apasionada ceramista que encuentra su hogar en las encantadoras calles de Córdoba Capital. Estoy estudiando en la Universidad Provincial de Córdoba, donde no solo cultivo mi amor por el arte, sino que también me sumerjo en el mundo de la cerámica.</p>

                    <p className='parrafo-bio'>En mi modesto taller, cada día me sumerjo en el proceso creativo, dejando que mis manos den forma a la arcilla y mi corazón le dé vida a cada pieza. Desde simples tazas hasta intrincadas esculturas, cada obra que creo está impregnada con el espíritu vibrante y la historia rica de mi amada ciudad.</p>

                    <p className='parrafo-bio'>Una de las cosas que más disfruto es compartir mi pasión con otros. Por eso, he comenzado a ofrecer talleres de cerámica donde invito a personas de todas las edades y habilidades a unirse a mí en esta maravillosa aventura creativa. Ver cómo mis alumnos descubren la belleza de trabajar con arcilla y cómo se inspiran para crear sus propias obras es una experiencia verdaderamente gratificante.</p>

                    <p className='parrafo-bio'>Mi objetivo es simple: traer un poco más de belleza al mundo y compartir el amor que tengo por mi ciudad a través del arte de la cerámica. Con cada pieza que creo y cada clase que imparto, espero inspirar a otros a descubrir la magia que se encuentra en lo hecho a mano y en la creatividad sin límites.</p>
                </article>
            </div>
        </>
    )
}