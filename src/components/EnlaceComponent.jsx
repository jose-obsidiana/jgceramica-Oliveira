import './EnlaceComponent.css';

export default function EnlaceComponent ({texto, href}) {


    return (
    <>
        <a className="enlaceNavBar" href={href}>{texto}</a>
        {/* <button >{texto}</button> */}
    </>
    )

}