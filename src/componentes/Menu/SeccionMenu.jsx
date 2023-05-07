import MenuGhibli from "./MenuGhibli"
import Video from "./Video"
import "./seccionMenu.css"

const SeccionMenu = () => {
    const items = {
        item1: "Historia",
        item2: "Obras",
        item3: "Enlaces de interes",
        item4: "Referencias"
    }
    return (
        <section className="seccionMenu">
            <MenuGhibli items={items} />
            <Video />
        </section>
    )
}

export default SeccionMenu


