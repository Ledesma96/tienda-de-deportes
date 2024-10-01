import { Mensajes, Orders, StockPanel } from "./components"

const Dashboard = ({menu}) => {
    return (
        <div style={{width: "100%"}}>
            {menu.messages && <Mensajes />}
            {menu.orders && <Orders />}
            {menu.stock && <StockPanel />}
        </div>
    )
}

export default Dashboard