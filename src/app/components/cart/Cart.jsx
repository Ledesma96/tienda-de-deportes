'use client'
import { showNotify, ToastNotification } from "@/app/helpers"
import { removeFromCart, selectCartTotal } from "@/redux/reducers"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Cart = ({setOpenCart, openCart}) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const total = useSelector(selectCartTotal);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(cart)
    }, [cart])

    function formatNumberWithDots(number) {
        return new Intl.NumberFormat('es-AR').format(number);
    }

    const deleteToCart = (id) => {
        dispatch(removeFromCart(id))
        ToastNotification('success', 'Producto eliminado')
    }

    const buy = () => {
        if(cart.length === 0){
            showNotify('Carrito vacio!')
        }
        else{
            router.push('/buy')
        }
    }

    return(
        <div className="cart" style={{transform: `${openCart ? "translateX(0%)" : "translateX(-100%)"}`,transition: "all 0.3s ease-in-out", right: "0"}}>
            <aside className="container-cart">
                <span className="cancel" onClick={() => setOpenCart(false)}>X</span>
                <h2 className="cart-title">CARRITO</h2>
                {cart.length === 0 &&
                    <p className="empty-cart">No hay productos en el carrito.</p>
                }
                <div>
                    {products.map((product) => (
                        <div className="card-cart" key={product.id}>
                            <img src={product.thumbnail}></img>
                            <p className="name">{product.name}</p>
                            <p className="count">{product.quantity}</p>
                            <p className="price">${formatNumberWithDots(product.price)}</p>
                            <svg onClick={() => deleteToCart(product.id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </div>
                    ))}
                </div>
                <div className="container-btn">
                    <p className="total">Total: ${formatNumberWithDots(total)}</p>
                    <button onClick={buy}>COMPRAR</button>
                    <button>CANCELAR</button>
                </div>
            </aside>
        </div>
    )
}

export default Cart