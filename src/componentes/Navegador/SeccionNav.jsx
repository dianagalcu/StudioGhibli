import LogoGhibli from "./LogoGhibli"
import Nav from "./Nav"
import "./seccionNav.css"

const seccionNav = () => {
    const links = {
        link1: "Explora",
        link2: "Studio Ghibli",
        link3: "Películas"
    }
    return (
        <section className="seccionNav">
            <LogoGhibli />
            <Nav links={links} />
        </section>

    )
}

export default seccionNav
