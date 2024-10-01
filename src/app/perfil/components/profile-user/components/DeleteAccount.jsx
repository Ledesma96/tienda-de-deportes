'use client'
import { useState } from "react";

const DeleteAccount = () => {
    const [isDeleted, setIsDeleted] = useState(false);
    return (
        <aside className="container-deleteAccount">
            <h1 className="title">Eliminar cuenta</h1>
            <div>
                {isDeleted ?
                    <>
                        <h2>¿Estás seguro de que deseas eliminar tu cuenta?</h2>
                        <div>
                            <button className="btn-confirm">Eliminar cuenta</button>
                            <button className="btn-cancel" onClick={() => setIsDeleted(false)}>Cancelar</button>
                        </div>
                    </>
                :
                    <>
                        <p>Esta acción no se puede deshacer y perderás todos tus datos.</p>
                        <button className="button-deleteAccount" onClick={() => setIsDeleted(true)}>Continuar</button>
                    </>
                }
            </div>
        </aside>
    )
}

export default DeleteAccount