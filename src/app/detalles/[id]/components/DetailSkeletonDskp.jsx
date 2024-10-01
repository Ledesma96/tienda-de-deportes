import { useWindowSize } from '@/app/helpers';
import ContentLoader from 'react-content-loader';

const DetailSkeletonDskp = props => {
    const {width} = useWindowSize();
    const styles = {
        width: width >= 1024 ? '100vw' : '100%',
        height: '100%'
    }
    return (
        <ContentLoader seed={3} viewBox="0 0 800 400" style={styles} backgroundColor='#E0E0E0' foregroundColor='#E7FF77' {...props}>
            <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
            {width >= 1024 &&
                <>
                    <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
                    <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
                    <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
                    <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
            </>}
            <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
            <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
            <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
            <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
            <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
            <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
            <circle cx="472" cy="159" r="7" />
            <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
            <circle cx="472" cy="190" r="7" />
            <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
            <circle cx="472" cy="219" r="7" />
            <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
            <circle cx="472" cy="249" r="7" />
            <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>
    )
}

export default DetailSkeletonDskp