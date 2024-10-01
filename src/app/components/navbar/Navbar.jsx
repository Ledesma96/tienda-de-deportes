'use client'
import { useWindowSize } from "@/app/helpers";
import { Desktop, Mobile } from "./components";

const Navbar = ({setOpenCart}) => {
    const { width } = useWindowSize();
    
    return (
        <>
            {width < 1024 ?  <Mobile setOpenCart={setOpenCart}/> : <Desktop setOpenCart={setOpenCart}/>}
        </>
    )
}

export default Navbar