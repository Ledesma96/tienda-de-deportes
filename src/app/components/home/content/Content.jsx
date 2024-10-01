'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../.."
const Content = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api.json");
                setTimeout(() => {
                    setData(response.data)
                }, 10000);
                
            } catch (error) {
                console.error("Error fetching the JSON file:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <main className="container-main">
            <section>
                <div>
                    <p className="sub_title">C<span>alidad y estilo para atletas.</span></p>
                    <Card data={data} count={10}/>
                </div>
            </section>
        </main>
    )
}

export default Content