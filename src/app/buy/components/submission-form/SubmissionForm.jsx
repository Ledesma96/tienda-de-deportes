
const SubmissionForm = ({fromDataSubmission, setFromDataSubmission}) => {
    const handleInputChange = (e) => {
        setFromDataSubmission({...fromDataSubmission, [e.target.name]: e.target.value });
    };
    return (
        <div className="form-submission">
            <h2>Datos de envio</h2>
            <div className="form-group">
                <label htmlFor="name" className={fromDataSubmission.address !== '' && 'label-up'}>calle y altura:</label>
                <input
                    type="text"
                    name="address"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className={fromDataSubmission.postalCode !== '' && 'label-up'}>Codigo postal:</label>
                <input
                    type="text"
                    name="postalCode"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="dni" className={fromDataSubmission.locality!== '' && 'label-up'}>Localidad:</label>
                <input
                    type="text"
                    name="locality"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className={fromDataSubmission.city !== '' && 'label-up'}>Ciudad:</label>
                <input
                    type="text"
                    name="city"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className={fromDataSubmission.deliveryInstructions !== '' && 'label-up'}>Inidicaciones:</label>
                <textarea
                    type="text"
                    name="deliveryInstructions"
                    onChange={e => handleInputChange(e)}
                    required
                />
            </div>
        </div>
    )
}

export default SubmissionForm