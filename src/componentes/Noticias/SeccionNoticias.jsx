import Imagenes from "./Imagenes"
import imagen1 from "../../ImagenesGhibli/MivecinoTotoro.jpg"
import imagen2 from "../../ImagenesGhibli/viajeChihiro.jpg"
import imagen3 from "../../ImagenesGhibli/Ponyo.jpg"
import imagen4 from "../../ImagenesGhibli/princesaMononoke.jpg"
import "./seccionNoticias.css"

const SeccionNoticias =() =>{
    const imagenes =[
        {
            nombre:"Mi vecino Totoro",
            img:imagen1,
            descripcion:"El filme protagonizado por los actores Noriko Hidaka, Chika Sakamoto y Hitoshi Takagi, cuenta la historia de una familia y sus interacciones con un espíritu del bosque al que llaman «Totoro», en un Japón de la posguerra."
        },

        {
            nombre:"El viaje de chihiro",
            img:imagen2,
            descripcion:"El filme cuenta la historia de una niña de diez años llamada Chihiro, quien durante una mudanza se ve atrapada en un mundo mágico y sobrenatural, teniendo como misión buscar su libertad y la de sus padres, y así poder regresar a su mundo. "
        },

        {
            nombre:"Ponyo",
            img:imagen3,
            descripcion:"La historia se centra en una criatura marina similar a un pez dorado llamada Ponyo, quien conoce y traba amistad con un niño de cinco años, Sōsuke, y desea convertirse en niña. "
        },

        {
            nombre:"La princesa Mononoke",
            img:imagen4,
            descripcion:"Ambientada en un Japón del período Muromachi, se centra en la lucha entre los guardianes sobrenaturales de un bosque y los humanos que profanan sus recursos, visto por el forastero Ashitaka"
        }
    ]

    return <Imagenes imagenes={imagenes}/>
        
}

export default SeccionNoticias