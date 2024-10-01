'use client'
import { getAllShopping } from "@/app/api/api";
import Link from "next/link";
import { useEffect, useState } from "react";

const Shopping = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchShopping = async () => {
            const response = await getAllShopping();
            if(response) {
                setData(response);
            }
        }
        fetchShopping();
    }, [])
    return (
        <aside className="container-shopping">
            <h1 className="title">Mis compras</h1>
            {data.map(item => (
                <Link href={`/mis-compras/${item.id}`} className="container-item" key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.date}</p>
                    <p>{item.total}</p>
                </Link>
            ))}
        </aside>
    )
}

export default Shopping