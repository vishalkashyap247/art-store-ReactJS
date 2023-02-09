import React from "react";
import "../styles/singleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../projectData/products";
import { useNavigate } from "react-router-dom";

function Product({cart, setCart}){
    let {id} = useParams();
    let result = products.findIndex(item=>item.key == id);
    
    // console.log("id is ", id-1, " ", result);
    // console.log("here is the ",products[result]);
    // const navigate = useNavigate();
    function handleClick(){
        console.log("done");
        setCart([...cart, id]);
        // navigate("./Cart");
        window.alert("item is added into cart");
    }
    return(
        <table className="table container fluid">
            <tbody>
            <tr>
                <td>
                    <img src={products[result].link } alt={products[result].title} className="indi_img" />
                </td>
                <td>
                    <h2 className="myDesc">
                        {products[result].title}
                    </h2>
                    <h5 className="myDesc">
                    description: <br /><br />{products[result].description}
                    </h5>
                    <p className="myDesc"><i className="fa fa-inr" aria-hidden="true"></i> {products[result].price}</p>
                    <p className="myDesc">{products[result].rating} <i className="fa fa-star" aria-hidden="true"></i></p>
                    <button className="btn btn-primary" onClick={handleClick}>Add to cart</button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
export default Product