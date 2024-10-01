import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Mobile = ({setOpenCart}) => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const [user, setUser] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState({
        acordeon1: false,
        acordeon2: false,
        acordeon3: false,
    });

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleAcrodeon = (acordenName) => {
        setIsOpenMenu(pervState => ({
            ...pervState,
            [acordenName]:!pervState[acordenName],
        }))
    }

    return (
        <header className="container-navbar-mobile">
            <div className={`container-hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Image className="logo" src="/images/logo.png"
            width={100} height={50} alt="Logo de tienda"></Image>
            <div className="container-icons">
                <Link href={`${user ? "/perfil" : "/auth"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                </Link>
                <div onClick={() => setOpenCart(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </div>
            </div>
            <div className={`container-options ${isOpen ? 'open-menu' : ''}`}>
                <div className="blur"></div>
                <nav>
                    <div className="inicio">
                        <Link href="/" onClick={toggleMenu}>INICIO</Link>
                    </div>
                    <div className='nav-div'
                            style={{
                                height: isOpenMenu.acordeon1 ? `${ref1.current.scrollHeight + 40}px`  : "30px",
                                transition: "height 0.2s ease",
                            }}>
                        <div>
                            <Link href="/productos/hombre" onClick={toggleMenu}>HOMBRE</Link>
                            <svg onClick={() => toggleAcrodeon('acordeon1')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                            </svg>
                        </div>
                        <div ref={ref1} className="acordeon">
                            <Link href="" onClick={toggleMenu}>CALZADO</Link>
                            <Link href="" onClick={toggleMenu}>REMERAS</Link>
                            <Link href="" onClick={toggleMenu}>PANTALONES</Link>
                        </div>
                    </div>
                    <div className="nav-div"
                        style={{
                            height: isOpenMenu.acordeon2 ? `${ref1.current.scrollHeight + 40}px`  : "35px",
                            
                            transition: "height 0.2s ease",
                        }}>
                        <div>
                            <Link href="/productos/mujere" onClick={toggleMenu}>MUJERE</Link>
                            <svg onClick={() => toggleAcrodeon('acordeon2')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                            </svg>
                        </div>
                            <div ref={ref2} className="acordeon">
                                <Link href="" onClick={toggleMenu}>CALZADO</Link>
                                <Link href="" onClick={toggleMenu}>REMERAS</Link>
                                <Link href="" onClick={toggleMenu}>PANTALONES</Link>
                            </div>
                            
                        </div>
                        <div className="nav-div"
                            style={{
                                height: isOpenMenu.acordeon3 ? `${ref1.current.scrollHeight + 40}px`  : "35px",
                                
                                transition: "height 0.2s ease",
                            }}>
                            <div>
                                <Link href="/productos/niño" onClick={toggleMenu}>NIÑO</Link>
                                <svg onClick={() => toggleAcrodeon('acordeon3')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                                </svg>
                            </div>
                            <div ref={ref3} className="acordeon">
                                <Link href="" onClick={toggleMenu}>CALZADO</Link>
                                <Link href="" onClick={toggleMenu}>REMERAS</Link>
                                <Link href="" onClick={toggleMenu}>PANTALONES</Link>
                            </div>
                            
                        </div>
                        <div className="contacto">
                            <Link onClick={toggleMenu} href="/contacto">CONTACTO</Link>
                        </div>
                </nav>
            </div>
        </header>
    )
}

export default Mobile