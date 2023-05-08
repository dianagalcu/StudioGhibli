import logo1 from "../../ImagenesGhibli/logoWhatsapp.png"
import logo2 from "../../ImagenesGhibli/logoFacebook.png"
import logo3 from "../../ImagenesGhibli/logoInstagram.png" 

const HistoriaGhibli = (props) => {
    console.log(props)
    return (
        <section className="texto">
            <div >
                <h1>Historia Studio Ghibli</h1>
                <p>Studio Ghibli, es un estudio japonés de animación, considerado por la crítica especializada
                    y muchos cinéfilos como uno de los mejores estudios de animación del mundo en la actualidad.
                    El estudio es conocido por sus largometrajes animados y también ha producido varios cortometrajes,
                    comerciales de televisión y una película para televisión. Fue fundado el 15 de junio de 1985 por
                    los directores Hayao Miyazaki e Isao Takahata y el productor Toshio Suzuki, después del éxito de
                    la película de anime de Topcraft Nausicaä del Valle del Viento 1984. Studio Ghibli también ha
                    colaborado con estudios de videojuegos en el desarrollo visual de varios videojuegos. </p>
            </div>

            <div className="logos">
                <img className="logoWhatsapp" src={logo1} />
                <img className="logoFacebook" src={logo2} />
                <img className="logoInstagram" src={logo3} />
            </div>
        </section>
    )
}

export default HistoriaGhibli