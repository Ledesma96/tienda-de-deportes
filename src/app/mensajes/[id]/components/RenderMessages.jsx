'use client'
import { getMessageById } from '@/app/api/api';
import { formateDate } from '@/app/helpers';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const RenderMessages = () => {
    const params = useParams();
    const id = params.id;
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await getMessageById(id);
                console.log(response);
                
                if (response) {
                    setMessage(response[0]);
                }
            } catch (error) {
                console.error('Error fetching message:', error);
            } finally {
                setLoading(false); // Finalizamos la carga
            }
        };

        fetchMessage();
    }, [id]); // Dependencia en 'id' para que se actualice si cambia

    if (loading) {
        return <div>Loading...</div>; // Mostrar mensaje de carga
    }

    if (!message) {
        return <div>No message found.</div>; // Mostrar si no se encuentra mensaje
    }

    return (
        <div className='container-message'>
            <div className='date'>
                <p>{formateDate(message.date)}</p>
            </div>
            <div className='info'>
                <p>Nombre: {message.name}</p>
                <p>Telefono: {message.phone}</p>
                <p>Email: {message.email}</p>
            </div>
            <div className='message'>
                <p>{message.message}</p>
            </div>
        </div>
    );
}

export default RenderMessages