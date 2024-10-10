
const DeliveryMethod = ({setDelivery, delivery}) => {
    return (
        <div className="header">
                <div>
                    <input type="radio" name="delivery" value="delivery" checked={delivery === 'delivery'} onChange={() => setDelivery('delivery')} />
                    <label htmlFor="delivery">Entrega</label>
                </div>
                <div>
                    <input type="radio" name="delivery" value="pickup" checked={delivery === 'pickup'} onChange={() => setDelivery('pickup')} />
                    <label htmlFor="pickup">Recoger en local</label>
                </div>
        </div>
    )
}

export default DeliveryMethod