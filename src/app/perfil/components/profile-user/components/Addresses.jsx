import { useState } from "react";

const Addresses = () => {
    const [addAddress, setAddAddress] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [locality, setLocality] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState([{name: "Pepito", lastName: "martinez", street: "Av. Mitre",number: "1547", city: "Buenos Aires", locality: "Quilmes", postalCode: 1878, phone: "1125487596"}])

    const handleForm = () => {
        console.log('entra');
        
        const address = {
            name,
            lastName,
            street,
            number,
            city,
            locality,
            postalCode,
            phone,
        };

        setData(prevData => [...prevData, address]);

        setName("");
        setLastName("");
        setStreet("");
        setNumber("");
        setCity("");
        setLocality("");
        setPostalCode("");
        setPhone("");
        setAddAddress(false);
        console.log('hola');
        
    };
    return (
        <aside className="container-addresses">
            <h1 className="title">Direcciones</h1>
            <div className="container-address">
                {data.map((address, index)=>(
                    <div className="item" key={index}>
                        <div className="header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                            </svg>
                            <p>{address.street} {address.number}</p>
                        </div>
                        <div className="body">
                            <p>Codigo postal {address.postalCode}</p>
                            <p>-</p>
                            <p>{address.locality}</p>
                            <p>-</p>
                            <p>{address.city}</p>
                        </div>
                        <div className="footer">
                            <p>{address.name} {address.lastName}</p>
                            <p>{address.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
            {addAddress &&
                <div className="container-form">
                    <form>
                        <input type="text" placeholder="Nombre" onChange={e => setName(e.target.value)}/>
                        <input type="text" placeholder="Apellido" onChange={e => setLastName(e.target.value)}/>
                        <input type="text" placeholder="Calle" onChange={e => setStreet(e.target.value)}/>
                        <input type="text" placeholder="Altura" onChange={e => setNumber(e.target.value)}/>
                        <input type="text" placeholder="Código postal" onChange={e => setPostalCode(e.target.value)}/>
                        <input type="text" placeholder="Localidad" onChange={e => setLocality(e.target.value)}/>
                        <input type="text" placeholder="Provincia" onChange={e => setCity(e.target.value)}/>
                        <input type="text" placeholder="Teléfono" onChange={e => setPhone(e.target.value)}/>
                    </form>
                </div>
            }
            <div className="container-btns">
                {addAddress ?
                    <>
                        <button onClick={handleForm}>Agregar</button>
                        <button onClick={() => setAddAddress(false)}>Cancelar</button>
                    </>
                    :
                    <button onClick={() => setAddAddress(true)}>Agregar domicilio</button>
                }
            </div>
        </aside>
    )
}

export default Addresses