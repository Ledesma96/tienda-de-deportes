'use client'
import { getProductsByCategory } from "@/app/api/api";
import { Card } from "@/app/components";
import { useEffect, useState } from "react";

const ContentCategory = ({category, sort, alf}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsByCategory(category)
            if(response) {
                setData(response);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (sort) {
            const sortedData = [...data];
            if (sort === 'asc') {
                sortedData.sort((a, b) => a.price - b.price);
            } else {
                sortedData.sort((a, b) => b.price - a.price);
            }
            setData(sortedData);
        } else {
            setData(data);
        }
    }, [sort]);
    

    // Efecto para ordenar alfabéticamente
    useEffect(() => {
        if(alf){
            const sortedData = [...data];
            if(alf === 'za'){
                sortedData.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
            }
            setData(sortedData);
        } else {
            setData(data);
        }
    }, [alf]);

    return (
        <main>
            <Card data={data} count={20}/>
        </main>
    )
}

export default ContentCategory