

const formulario = () => {
    return (

        <form className="formulario">
            <label>
                <input className="nombre" type="text" placeholder="Nombre"/>
            </label>

            <label>
                <input className="contraseña" type="email" placeholder="Correo" />
            </label>

            <label>
                <input className="mensaje" type="number" placeholder="Teléfono" />
            </label>

            <label>
                <input className="apellido" type="text" placeholder="Apellido"/>
            </label>

            <textarea name="" id="" cols="30" rows="20" placeholder="Mensaje"></textarea>

            <button className="boton" type="submit">Enviar</button>
        </form>
    )
}

export default formulario