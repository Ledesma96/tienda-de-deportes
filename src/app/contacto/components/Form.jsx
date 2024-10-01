
const Form = () => {
    return (
        <main className="container-form-contact">
            <form className="form">
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Correo electronico"/>
                <input type="number" placeholder="Telefono"/>
                <textarea placeholder="Escribe tu mensaje"></textarea>
                <button className="send" type="submit">Enviar</button>
            </form>
        </main>
    )
}

export default Form