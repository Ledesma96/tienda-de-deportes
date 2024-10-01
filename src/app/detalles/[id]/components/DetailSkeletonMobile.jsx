import { useWindowSize } from '@/app/helpers';
import ContentLoader from 'react-content-loader';

const DetailSkeletonMobile = props => {
    const { width } = useWindowSize();
    const styles ={
        width: '90%', // 90% del ancho de la pantalla
        height: 'auto', // Altura automática
        margin: '32px auto', // Centrar horizontalmente
        display: 'flex',
        flexDirection: 'column', // Apilar los elementos en columna
        gap: '16px', // Espacio entre los elementos
    };

    return (
        <ContentLoader
            seed={3}
            viewBox="0 0 800 750"
            style={styles}
            backgroundColor='#E0E0E0'
            foregroundColor='#E7FF77'
            {...props}
        >
            <rect x="5%" y="0" rx="8" ry="8" width="90%" height="500"/>
            <rect x="5%" y="516" rx="0" ry="0" width="90%" height="25" />
            <rect x="5%" y="548" rx="0" ry="0" width="90%" height="6" />
            <rect x="5%" y="564" rx="0" ry="0" width="90%" height="6" />
            <rect x="5%" y="580" rx="0" ry="0"width="90%" height="6" />
            <rect x="5%" y="596" rx="0" ry="0" width="70" height="30" />
            <rect x="15%" y="596" rx="0" ry="0" width="70" height="30" />
            <circle cx="6%" cy="650" r="7" />
            <rect x="8%" y="645" rx="5" ry="5" width="90%" height="10" />
            <circle cx="6%" cy="672" r="7" />
            <rect x="8%" y="672" rx="5" ry="5" width="90%" height="10" />
            <circle cx="6%" cy="698" r="7" />
            <rect x="8%" y="698" rx="5" ry="5" width="90%" height="10" />
            <circle cx="6%" cy="724" r="7" />
            <rect x="8%" y="724" rx="5" ry="5" width="90%" height="10" />
        </ContentLoader>
    );
}

export default DetailSkeletonMobile;
