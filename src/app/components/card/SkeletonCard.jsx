import ContentLoader from 'react-content-loader'

const SkeletonCard = props => (
    <ContentLoader viewBox="0 0 300 280" height={280} width={330} style={{marginTop: '32px'}} backgroundColor='#E0E0E0' foregroundColor='#E7FF77' {...props}>
        <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
        <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
        <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
        <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
    </ContentLoader>
)



export default SkeletonCard