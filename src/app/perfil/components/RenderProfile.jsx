'use client'
import { logout } from "@/redux/reducers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard, Menu, ProfileUser } from ".";

const RenderProfile = () => {
    const router = useRouter();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [menu, setMenu] = useState({
        profile: true,
        shopping: false,
        addresses: false,
        deleteAccount: false,
        messages: true,
        orders: false,
        stock: false,
    })

    const handleLogOut = () => {
        dispatch(logout())
        router.push('/')
    }
    return (
        <main className="container-profile">
            <div className="container-title">
                <h1 className="title-profile">{`${user.role === "admin"? "Panel de control" : "mi cuenta"}`}</h1>
            </div>
            <div className="container-logout" onClick={handleLogOut}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                </svg>
                <p>Cerrar sesion</p>
            </div>
            <div className="container-profileUser">
                <Menu menu={menu} setMenu={setMenu}/>
                {user.role === 'admin' ?
                    <Dashboard menu={menu}/>
                    :
                    <ProfileUser menu={menu}/>
                }
            </div>
        </main>
    )
}

export default RenderProfile