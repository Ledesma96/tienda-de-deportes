
const PersonalForm = ({formDataPersonal, setFormDataPersonal}) => {
    const handleInputChange = (e) => {
        setFormDataPersonal({...formDataPersonal, [e.target.name]: e.target.value });
    };
    return (
        <div className="form-personal">
            <h2>Datos personales</h2>
            <div className="form-group">
                <label htmlFor="name" className={formDataPersonal.name !== '' && 'label-up'}>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className={formDataPersonal.lastName !== '' && 'label-up'}>Apellido:</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="dni" className={formDataPersonal.dni !== '' && 'label-up'}>DNI:</label>
                <input
                    type="text"
                    name="dni"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className={formDataPersonal.phone !== '' && 'label-up'}>Telefono:</label>
                <input
                    type="text"
                    name="phone"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
        </div>
    )
}

export default PersonalForm