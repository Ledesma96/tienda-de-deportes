import { addCart } from "@/app/api/api";
import { addToCart } from "@/redux/reducers";
import { useDispatch, useSelector } from "react-redux";

const PurchaseButtons = ({id, count}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    const addProducToCart = async() => {
        const response = await addCart(id, count)
        if(response){
            dispatch(addToCart(response))
            console.log(cart);
            
        }
        
    }
    return (
        <div className="div-btns">
            <button onClick={addProducToCart}>Agregar al carrito</button>
            <button>Comprar ahora</button>
        </div>
    )
}

export default PurchaseButtons