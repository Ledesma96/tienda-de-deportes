import { Form, Header, Info, Map } from "./components"

const page = () => {
    return (
        <div className="container-contact" style={{"background": "black"}}>
            <Header />
            <Form />
            <Info />
            <Map />
        </div>
    )
}

export default page