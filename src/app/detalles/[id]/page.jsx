'use client'
import { useWindowSize } from "@/app/helpers";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Detail, DetailSkeletonDskp, DetailSkeletonMobile, Gallery } from "./components";

const page = () => {
    const { width } = useWindowSize();
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);


    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get('/api.json');
            if(response){
                const productData = response.data.find(product => product.id === parseInt(id));
                setTimeout(() => {
                    setProduct(productData);
                    setImages(productData.thumbnail.map(item => ({
                        original: item,
                        thumbnail: item,
                    })))
                }, 10000);
                return
            }
            return console.log(response);
            
        }
        fetchProduct();
    }, [])

    return (
        <div className="container-detail">
            {product ?
                <>
                    <Gallery images={images}/>
                    <Detail product={product}/>
                </>
                :
                (width >= 1024 ?
                    <DetailSkeletonDskp />
                    :
                    <DetailSkeletonMobile />

                )
            }
        </div>
    )
}

export default page