import React from "react";
import CartItem from "./CartItem";

function Cart({cart, setCart}){
    // var n = 0;

    function handleCheck(e){
        e.preventDefault();
        window.alert("Order has been shipped. ThankYou for your kind visit.")
        setCart([]);
    }

    function handleCart(event){
        return(
            <CartItem key={event} id={event}/>
        )
    }
    // console.log(cart.length);
    // console.log(typeof cart);
    return(
        <div className="container">
        <table className="table">
        <tbody>
            {cart.length===0?<tr><td><h1>Your cart is Empty :( </h1></td></tr>:cart.map(handleCart)}
        </tbody>
      </table>
      {/* var price = cart.map(handlePrice); */}
      {/* <p>{n}</p> */}
      <button onClick={handleCheck} className="btn btn-primary">Proceed to checkout</button>
        </div>
    )
}

export default Cart;