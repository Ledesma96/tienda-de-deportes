'use client'
import { useState } from 'react';

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState({name: "Juan Perez", email: "juan@example.com", phone: "1234567890", address: "Carrera 123, Edificio XYZ, Local 123"})

    const changeInfo = () => {
        setProfile(prevProfile => ({
            ...prevProfile,
            ...(name && { name }),
            ...(email && { email }),
            ...(phone && { phone }),
            ...(address && { address }),
            ...(password && { password })
        }));
        setEdit(false);
    };

    return (
        <div className='container-personaiInfo'>
            <h2>Información Personal</h2>
            {edit ?
                <section>
                    <div>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label for="phone">Teléfono:</label>
                        <input type="tel" id="phone" name="phone" onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div>
                        <label for="address">Dirección:</label>
                        <input type="text" id="address" name="address" onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={changeInfo}>Confirmar</button>
                    </div>
                    <div>
                        <button onClick={() => setEdit(false)}>Cancelar</button>
                    </div>
                </section>
            :
                <section>
                    <div>
                        <label for="name">Nombre:</label>
                        <p>{profile.name}</p>
                    </div>
                    <div>
                        <label for="email">Correo electrónico:</label>
                        <p>{profile.email}</p>
                    </div>
                    <div>
                        <label for="phone">Teléfono:</label>
                        <p>{profile.phone}</p>
                    </div>
                    <div>
                        <label for="address">Dirección:</label>
                        <p>{profile.address}</p>
                    </div>
                    <div>
                        <label for="password">Contraseña:</label>
                        <p>*********</p>
                    </div>
                    <div>
                        <button onClick={() => setEdit(true)}>Editar</button>
                    </div>
                </section>
            }
        </div>
    )
}

export default Profile