'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

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


export const ToastNotification = (icon, title) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon,
        title,
    });
};

export const showNotify = (title) => {
    Swal.fire({
        title: title,
        customClass: {
            popup: 'notify',
        },
    });
};

