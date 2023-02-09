import React from "react";
import "../styles/home.css";
import Products from "./Products";
import Carousel from "./Carousel";
function Home(){
    return (<>
        <div className="home">
            <img src="./cloud.png" className="img1st" alt="cloud" />
            <h1 className="myTitle">Welcome to Art Store</h1>
            <h3 className="myDesc">scroll below!</h3>
            <img src="./cloud.png" className="img2nd" alt="cloud" />
            <br/><br/>
            <div className="myLinks">
                <a href="https://github.com/vishalkashyap247"><i class="fa fa-github fa-2xl linkEffect" ></i></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/vishal-kashyap-447a451ba"><i class="fa-brands fa-linkedin fa-2xl linkEffect"></i></a>
            </div>
        </div>
        <Carousel />
        <Products />
    </>
    )

}

export default Home;