import { useEffect, useState } from 'react';

export const formateDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(date).toLocaleString('es-ES', options);
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: undefined });

    useEffect(() => {
        const handleResize = () => {
        setWindowSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
