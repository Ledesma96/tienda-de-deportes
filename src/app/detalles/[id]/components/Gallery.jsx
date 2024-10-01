'use client'
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

const Gallery = ({images}) => {

    const useWindowSize = () => {
        const [ windowSize, setWindowSize ] = useState({width: undefined})

        useEffect(() =>{
            function handleResize() {
                setWindowSize(
                    {width: window.innerWidth}
                )
            }
            window.addEventListener('resize', handleResize)
            handleResize()
            return () => window.removeEventListener('resize', handleResize)
        }, [])
        return windowSize;
    }

    const {width} = useWindowSize()
    return (
        <ImageGallery
            additionalClass={"gallery"}
            items={images}
            showThumbnails={width >= 1024}
            {...(width >= 1024 && { thumbnailPosition: "left" })}
            showPlayButton={false}
            slideDuration={250}
        />
    )
}

export default Gallery