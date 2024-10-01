'use client'
import { useEffect, useRef } from "react";
const data =["/images/Nike-Logo.png", "/images/Adidas-Logo-1991.png", "/images/marca-logo1-1-1691163790.webp","/images/logo-Lotto.png", "/images/Under-Armour-Logo-1.png", "/images/logo-Reebok.png", "/images/new-balance.png"]

const Pasarale = () => {
    const refSlider = useRef(null)

    useEffect(() => {
        if (refSlider.current) {
            refSlider.current.style.width = `${200 * data.length * 2}px`;
            refSlider.current.innerHTML += refSlider.current.innerHTML
        }
    }, [])
    return (
        <div className="container-slider">
            <h1 className="title">VESTÍ CON LAS MEJORES MARCAS</h1>
            <div className="slide">
                <div ref={refSlider} className="inner-slide">
                    {data.map((img, index) => (
                        <div className='contnter-slider' key={index}>
                            <img className='img_slider' src={img}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Pasarale