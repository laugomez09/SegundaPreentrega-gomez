import { useContext } from "react";
import cart from "../../img/cart.svg"
import { listCartContext } from "../components-card/providerContextCart";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
    const { setCartShow, cartShow } = useContext(controllerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerLength" onClick={showCart}>
            <img src={cart} alt="cart"></img>
            <span className="cantCart" style={{backgroundColor : "#328a00ef"}}>
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;