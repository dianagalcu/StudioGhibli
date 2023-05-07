
const navegador = ({ links }) => {
    return (
        <div className="seccionLinks">
            <ul>
                <li className="explora">{links.link1}</li>
                <li className="ghibli">{links.link2}</li>
                <li className="peliculas">{links.link3}</li>
            </ul>
        </div>
    )
}

export default navegador