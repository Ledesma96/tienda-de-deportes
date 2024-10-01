'use client'
import { useParams } from 'next/navigation';
import { ContentContainer } from '.';


const RenderMyPurchases = () => {
    const params = useParams();
    
    return (
        <div>
            <ContentContainer id={params.id}/>
        </div>
    )
}

export default RenderMyPurchases