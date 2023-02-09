import React from "react";
import { products } from "../projectData/products";
import "../styles/cart.css";

function CartItem(props){
    // var  p =  Number(props.price) + Number(products[props.id -1].price);
    // props.setPrice(p);
    // console.log("price is ", p);
    return(
    <tr>
        <td  className="img_table">
            <img alt="product_img" className="productClassImg" src={products[props.id -1].link} />
        </td>
        <td>
            <h3>{products[props.id -1].title}</h3>
            <p><i className="fa fa-inr" aria-hidden="true"></i> {products[props.id -1].price}</p>
            <p>Quality: 1</p>
        </td>
    </tr>
    )
}

export default CartItem;