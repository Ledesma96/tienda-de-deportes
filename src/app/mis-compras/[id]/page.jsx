'use client'
import { useParams } from 'next/navigation'
import { Content } from './components'

const page = () => {
    const params = useParams()
    return (
        <div>
            <Content id={params.id}/>
        </div>
    )
}

export default page