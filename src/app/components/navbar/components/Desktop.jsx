'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Desktop = ({setOpenCart}) => {
    const user = useSelector(state => state.user)
    const [isValidUser, setIsValidUser] = useState(!!user.email)
    const pathName = usePathname()
    const refElement = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]
    const [styles, setStyles] = useState({})
    const [acordeon, setAcordeon] = useState({
        acordeon1: false,
        acordeon2: false,
        acordeon3: false
    })

    const links = [
        { label: "Inicio", href: "/", acordeon: false },
        { label: "Hombre", href: "/productos/hombre", acordeon: true, acordeonName:"acorden1", subLinks: ["Calzado", "Remeras", "Pantalones"] },
        { label: "Mujer", href: "/productos/mujer", acordeon: true, acordeonName:"acorden2", subLinks: ["Calzado", "Remeras", "Pantalones"] },
        { label: "Kids", href: "/productos/kids", acordeon: true, acordeonName:"acorden3", subLinks: ["Calzado", "Remeras", "Pantalones"] },
        { label: "Contacto", href: "/contacto", acordeon: false },
        { label: isValidUser ? (user.role == "admin" ? "dashboard" : "perfil") : "Iniciar sesión", href: isValidUser ? "/perfil" :  "/auth", acordeon: false }
    ];

    useEffect(() => {
        setIsValidUser(!!user.email);
    }, [user])

    const handleMouseEnter = (acordeonName) => {
        setAcordeon(prevState => ({
            ...prevState,
            [acordeonName]: !prevState[acordeonName]
        }))
    }

    const handleMouseOut = () => {
        setAcordeon({
            acordeon1: false,
            acordeon2: false,
            acordeon3: false
        });
    }

    
    const handleMouseEnterUnderline = (index) => {
        let element = refElement[index].current;
    
        if (element) {
            const elementRect = element.getBoundingClientRect(); // Posición del elemento en la pantalla
            const navRect = element.closest('nav').getBoundingClientRect(); // Posición del nav en la pantalla
    
            const width = elementRect.width;
            const left = elementRect.left - navRect.left; // Posición del elemento relativa al <nav>
    
            setStyles({
                width: `${width}px`,
                left: `${left}px`
            });
        }
    };
    const handleMouseLeaveUnderline = () => {
        const routeToIndex = {
            "/": 0,
            "/productos/hombre": 1,
            "/productos/mujer": 2,
            "/productos/niños": 3,
            "/contacto": 4,
            "/auth": 5
        }
        const index = routeToIndex[pathName];
        
        let element = refElement[index]?.current
        if (element) {
            const elementRect = element.getBoundingClientRect(); // Posición del elemento en la pantalla
            const navRect = element.closest('nav').getBoundingClientRect(); // Posición del nav en la pantalla
    
            const width = elementRect.width;
            const left = elementRect.left - navRect.left; // Posición del elemento relativa al <nav>
    
            setStyles({
                width: `${width}px`,
                left: `${left}px`
            });
            return
        }
        setStyles({
            width: "0px",
            left: "0px"
        })
    };

    useEffect(() => {
        handleMouseLeaveUnderline();
    }, [pathName]);
    
    return (
        <header className="container-navbar-desktop">
            <div className="container-logo">
                <Image className="logo" src="/images/logo.png" width={100} height={50} alt="Logo de tienda"></Image>
            </div>
            <div className="container-nav-desktop">
                <nav>
                    <span className="underlined" style={styles}></span>
                    {links.map((link, index) => (
                        <div key={index} onMouseEnter={() => {`${link.acordeon && handleMouseEnter(link.acordeonName)}`,handleMouseEnterUnderline(index)}} className="container-links"
                        onMouseLeave={() => {handleMouseOut() ,handleMouseLeaveUnderline()}}>
                            <Link ref={refElement[index]} href={link.href}>
                                <p>{link.label}</p>
                            </Link>
                            {link.acordeon &&
                                <div className="container-menu" style={{height: acordeon[link.acordeonName] ? "100px" : "0px"}}>
                                <Link href="" >Calzado</Link>
                                <Link href="" >Remeras</Link>
                                <Link href="" >Pantalones</Link>
                            </div>
                            }
                        </div>
                    ))}
                </nav>
            </div>
            <Cart setOpenCart={setOpenCart}/>
        </header>
    )
}

export default Desktop