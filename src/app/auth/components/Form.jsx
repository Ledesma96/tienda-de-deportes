'use client'
import { useRef, useState } from "react"
import Login from "./Login"
import Register from "./Register"
const Form = () => {
    const refs = [useRef(null), useRef(null)]
    const [login, setLogin] = useState(true)
    const styles = {
        bottom: "0px",
        left: login ? "0" : "calc(45% + 16px)",
        transition: "all 0.3s ease-in-out"
    }
    const stylesContainer = {
        transform: login ? "translate( 0%, -50%)" : "translate(-50%, -50%)",
        transition: "all 0.3s ease-in-out"
    }
    return(
        <main className="container-auth">
            <div className="container-options_form">
                <span className="underline" style={styles}></span>
                <p ref={refs[0]} onClick={() => setLogin(true)}>Iniciar sesion</p>
                <p ref={refs[1]} onClick={() => setLogin(false)}>Registrarse</p>
            </div>
            <div className="container-forms" style={stylesContainer}>
                <Login />
                <Register />
            </div>
        </main>
    )
}

export default Form