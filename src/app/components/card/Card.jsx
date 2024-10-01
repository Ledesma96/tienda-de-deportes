'use client'
import { addCart } from "@/app/api/api";
import { addToCart } from "@/redux/reducers";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import SkeletonCard from "./SkeletonCard";

const Card = ({ data, count }) => {
    const dispatch = useDispatch();

    function formatNumberWithDots(number) {
        return new Intl.NumberFormat('es-AR').format(number);
    }

    const addProducToCart = async(id) => {
        const response = await addCart(id, 1)
        if(response){
            dispatch(addToCart(response))
        }
    }
    return (
        <>
            {data ?
                <div className="card-container">
                    {data.map((card) => (
                        <div className="card" key={card.id}>
                            <Fade>
                                <Link href={`/detalles/${card.id}`} className="card-image">
                                    <img src={card.thumbnail[0]} alt={card.name} />
                                </Link>
                                <div className="card-content">
                                    <h2 className="card-title">{card.name}</h2>
                                    <p>${formatNumberWithDots(card.price)}</p>
                                    <button className="card-button" onClick={() => addProducToCart(card.id)}>Agregar al crrito</button>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
                :
                <>
                    {Array.from({ length: count }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </>

            }
        </>
    );
};

export default Card;
