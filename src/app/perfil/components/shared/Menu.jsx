'use client'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Menu = ({menu, setMenu}) => {
    
    const user = useSelector(state => state.user)
    const [viewMenu, setViewMenu] = useState([])
    const handleMenu = (menu) => {
        setMenu(prevMenu =>{
            const updateMenu = Object.keys(prevMenu).reduce((acc, key) => {
                acc[key] = false;
                return acc
            }, {})
            updateMenu[menu] = true;
            return updateMenu;
        })
    }

    const menuOptions = [
        {name: 'profile',nameMenu: 'Perfil', role: 'user',},
        {name:'shopping',nameMenu: 'Mis compras', role: 'user',},
        {name: 'addresses',nameMenu: 'Direcciones', role: 'user',},
        {name: 'deleteAccount',nameMenu: 'Eliminar cuenta', role: 'user',},
        {name:'messages',nameMenu: 'Mensajes', role: 'admin',},
        {name: 'orders',nameMenu: 'Ordenes', role: 'admin',},
        {name:'stock',nameMenu: 'Stock', role: 'admin',},
    ]

    useEffect(() => {
        const getRole = () => {
            if (user.role === 'admin'){
                setViewMenu(menuOptions.filter(m => m.role === 'admin'))
                return
            }
            setViewMenu(menuOptions.filter(m => m.role === 'user'))
        }
        getRole()
    }, [user])

    console.log(menu);
    
    return (
        <aside className="menu-profileUser">
            <nav>
                {viewMenu.map((item, index) => (
                    <button key={index} className={`${menu[item.name] && 'active'}`} onClick={() => handleMenu(item.name)}>
                        <p>{item.nameMenu}</p>
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Menu