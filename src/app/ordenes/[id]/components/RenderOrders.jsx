'use client'
import { getOrderById } from '@/app/api/api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const RenderOrders = () => {
    const params = useParams();
    const [order, setOrder] = useState({})

    useEffect(() => {
        const fetchOrder = async() => {
            const response = await getOrderById(params.id);
            console.log(response);
            
            if(response) {
                setOrder(response[0])
            }
        }
        fetchOrder()
    }, [params.id])
    return (
        <div className="order-detail">
            <h2 className="order-title">Detalle del Pedido #{order.id}</h2>
            <div className="order-section buyer-info">
                <h3>Información del Comprador</h3>
                <p><strong>Nombre:</strong> {order.buyerName}</p>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Teléfono:</strong> {order.phone}</p>
            </div>
            <div className="order-section items-info">
                <h3>Artículos</h3>
                <ul>
                    {order?.items?.map((item, index) => (
                        <li key={index} className="item">
                            <p><strong>{item.itemName}</strong></p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio por unidad: ${item.pricePerUnit}</p>
                        </li>
                    ))}
                </ul>
                <p className="total-price"><strong>Total:</strong> ${order.totalPrice}</p>
            </div>
            {order.hasShipping && (
                <div className="order-section shipping-info">
                    <h3>Dirección de Envío</h3>
                    <p>{order.shippingAddress.street}</p>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                    <p>{order.shippingAddress.country}</p>
                </div>
            )}
            <div className="order-section additional-info">
                <p><strong>Fecha de Compra:</strong> {new Date(order.purchaseDate).toLocaleString()}</p>
                <p><strong>Método de Pago:</strong> {order.paymentMethod}</p>
                <p><strong>Estado:</strong> {order.status}</p>
            </div>
        </div>
    );
}

export default RenderOrders