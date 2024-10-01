import { getAllMessages } from '@/app/api/api';
import { formateDate } from '@/app/helpers';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Mensajes = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await getAllMessages();
            if(response) {
                setMessages(response)
            }
        }
        fetchMessages()
    }, [])

    const handleClick = (id) => {
        const updatedMessages = messages.map(message =>
            message.id === id ? { ...message, seen: true } : message
        );
        setMessages(updatedMessages);
    };
    

    return (
        <div className='container-messages'>
            <h2 className='title'>Mensajes</h2>
            <div className='messages'>
                {messages.map(message => (
                    <Link onClick={()=> handleClick(message.id)} href={`/mensajes/${message.id}`} className={`${message.seen === false && 'not-seen'} item`} key={message.id}>
                        <p>{message.id}</p>
                        <p>{message.name}</p>
                        <p>{formateDate(message.date)}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Mensajes