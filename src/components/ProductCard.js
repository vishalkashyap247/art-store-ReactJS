import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {

    const navigate = useNavigate();
    function handleClick(){
        const path = "/product/"+props.id;
        navigate(path);
    }

  return (
    <tr onClick={handleClick}>
      <td className="imageSection">
        <img alt="product_img" className="productClassImgNew" src={props.link} />
      </td>
      <td>
        <h1 className="myDesc">{props.title}</h1>
        {/* <h3>{props.description}</h3> */}
        <h2 className="myDesc">{props.rating} <i className="fa fa-star" aria-hidden="true"></i></h2>
        <h4 className="myDesc"><i className="fa fa-inr" aria-hidden="true" /> {props.price}</h4>
        <p className="myDesc">{props.extra}</p>
      </td>
    </tr>
  );
}

export default ProductCard;
