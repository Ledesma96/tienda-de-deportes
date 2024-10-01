'use client'
import { getAllOrders } from '@/app/api/api';
import { formateDate } from '@/app/helpers';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async() => {
            const response = await getAllOrders();
            if(response) {
                setOrders(response)
            }
        }
        fetchOrders()
    }, [])
    return (
        <div className='container-orders'>
            <h2 className='title'>Ordenes</h2>
            <div className='orders'>
                {orders.map(order => (
                    <Link href={`/ordenes/${order.id}`} className='item' key={order.id}>
                        <p>{order.id}</p>
                        <p>{order.buyerName}</p>
                        <p>{formateDate(order.purchaseDate)}</p>
                    </Link >
                ))}
            </div>
        </div>
    )
}

export default Orders