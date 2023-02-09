import React from "react";
import "../styles/custom.css";
import { useNavigate } from "react-router-dom";

function CustomProducts() {
  const navigate = useNavigate();
  function handleClick(e){
    e.preventDefault();
    window.alert("Our Experts will get in touch with you sortly. ThankYou");
    navigate("/home");
  }
  return (
    <div className="container fluid myDesc">
        <br/>
      <h3 className="myDesc">This is a Special page for custom artworks</h3>
      <form>
      <label for="myfile">Select a file:</label><br/>
        <select class="form-select" aria-label="Default select example">
          <option value="1" selected>Pencil Sketch</option>
          <option value="2">Charcol Sketch</option>
          <option value="3">Oil Painting</option>
          <option value="4">Crayon Sketch</option>
          <option value="5">Different style | which style? Write on textbox </option>
        </select><br />
        <label for="myfile">Select paper size:</label><br/>
        <select class="form-select" aria-label="Default select example">
          <option value="1">A1</option>
          <option value="2">A2</option>
          <option value="3">A3</option>
          <option value="4" selected>A4</option>
        </select><br />
        <label for="myfile">Select paper quality:</label><br/>
        <select class="form-select" aria-label="Default select example">
          <option selected>Premium</option>
          <option value="2">Super</option>
          <option value="3">Best</option>
        </select>
        <br />
        <label for="myfile">Any modification required ? or any message to our Artist </label><br/>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br />
        <label for="myfile">Select photo(s), High Quality photo needed</label><br/>
        <input type="file" id="myfile" name="myfile" multiple /><br/><br/>
        <button className="btn btn-primary" onClick={handleClick}>Draw for me</button><br/>
        <p>Reviews will available soon</p>
      </form>
    </div>
  );
}

export default CustomProducts;
