import React from "react";

function Footer(){
    var date = new Date();
    date = date.getFullYear();
    return(
        <p className="footer">{date} &#x24B8; Vishal Kashyap</p>
    );
}

export default Footer;