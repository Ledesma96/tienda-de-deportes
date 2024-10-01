import { Addresses, DeleteAccount, Profile, Shopping } from "./components"


const InfoProfile = ({menu}) => {
    
    return (
        <>
            {menu.profile && <Profile />}
            {menu.shopping && <Shopping />}
            {menu.addresses && <Addresses />}
            {menu.deleteAccount && <DeleteAccount />}
        </>
    )
}

export default InfoProfile