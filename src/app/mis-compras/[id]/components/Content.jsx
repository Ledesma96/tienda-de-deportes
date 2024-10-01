import { getShoppingById } from '@/app/api/api'
import { useEffect, useState } from 'react'
import Item from './Item'

const Content = ({id}) => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchItem = async() => {
            const response = await getShoppingById(id);
            if(response) {
                setItem(response)
            }
        }
        fetchItem();
    }, [])
    return (
        <main className='container-shopping'>
            <div className="purchase-header">
                <h2>Orden #{item.id}</h2>
                <p>Fecha: {new Date(item.date).toLocaleDateString()}</p>
                <p>Total: ${(item.total ? item.total.toFixed(2).replace('.', ',') : '0,00')}</p>
            </div>
            <Item item={item} />
            <button className='repeat-purchase'>Repetir compra</button>
        </main>
    )
}

export default Content