'use client'
import { getAllProducts } from '@/app/api/api';
import { Card } from '@/app/components';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Sliders = ({category}) => {
    const sliderWaper = useRef(null);
    const sliderContent = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState(null);
    const [maxTranslateX, setMaxTranslateX] = useState(0);

    const styles = {
        display: 'flex',
        justifyContent:'space-between',
        flexWrap: 'noWrap',
        gap: '1rem',
        marginBottom: '2rem',
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllProducts()
            
            if(response){
                setTimeout(() => {
                    const products = response.filter(item => item.category === category)
                    setData(products.slice(0, 10))
                }, 1000);
            }
        }
        fetchData();
    }, [data])

    useEffect(() => {
        const updateMaxTranslateX = () => {
            if (sliderContent.current && sliderWaper.current) {
                const containerWidth = sliderWaper.current.offsetWidth; // Ancho del contenedor
                const sliderWidth = sliderContent.current.scrollWidth; // Ancho total del contenido (slider)
                
                // Calcula el desplazamiento máximo permitido
                const maxTranslate = Math.max(sliderWidth - containerWidth, 0); // Evita valores negativos
                setMaxTranslateX(maxTranslate);
            }
        };

        // Ejecutar la función cuando se carga el componente o se redimensiona la ventana
        updateMaxTranslateX();
        window.addEventListener('resize', updateMaxTranslateX);

        return () => {
            window.removeEventListener('resize', updateMaxTranslateX);
        };
    }, [data]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newTranslateX = (prevIndex + 1) * 300; // Cambia 300 por el ancho de cada card
            if (newTranslateX < maxTranslateX) {
                return prevIndex + 1;
            }
            return prevIndex; // No se mueve si alcanzó el final
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            }
            return prevIndex;
        });
    };
    

    return (
        <div className="slider-container">
            <div className='slider-header'>
                <p className='category'>{category}</p>
                <Link href={`/productos/${category}`}>
                    <p>Ver mas...</p>
                </Link>
            </div>
            <button className="arrow-left" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
            </button>
            <div className="slider-wrapper" ref={sliderWaper}>
                <div ref={data && sliderContent} className="slider-content" style={{ transform: `translateX(-${currentIndex * 300}px)`}}>
                    <Card data={data} count={5} styles={styles} />
                </div>
                <div className='container-more'>
                    <Link href={`/productos/${category}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                            <path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                        <p>Ver mas...</p>
                    </Link>
                </div>
            </div>
                <button className="arrow-right" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </button>
        </div>
    );
}

export default Sliders