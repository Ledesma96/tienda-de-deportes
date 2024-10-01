import { useEffect, useState } from "react";

const Item = ({item}) => {
    const [products, setProdcuts] = useState([])
    useEffect(() => {
        setProdcuts(item.products)
    }, [item])
    return (
        <div className="purchase-products">
            {products?.map((item) => (
                <div key={item.id} className="product-card">
                    <img src={item.thumbnail} alt={item.name} />
                    <div className="product-details">
                        <h3>{item.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price.toFixed(2).replace('.', ',')}</p>
                        <p>Subtotal: ${(item.quantity * item.price).toFixed(2).replace('.', ',')}</p>
                    </div>
                    <button className="details-btn">Details</button>
                </div>
            ))}
        </div>
    )
}

export default Item