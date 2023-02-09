import React from "react";

function Carousel(){
    return(
    <div id="carouselExampleCaptions" class="carousel slide container caro" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img className="cImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rVpSQZKJt1g3c_1mwq87LwHaEK%26pid%3DApi&f=1&ipt=650080a694aefa12567ef17faa029cd8a6bd41ffdef1fb0c1f5d87831e595249&ipo=images" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Pencil Artworks</h5>
          <p>We have best artist and good suppliers</p>
        </div>
      </div>
      <div class="carousel-item">
        <img className="cImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WKOF0UgW5PgUh7BMZGpVZQHaEK%26pid%3DApi&f=1&ipt=2992b045d7056c64c974f49f2a3f91bdd1d8a4fbfd78d45d8671dfe104459c12&ipo=images" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>Pencil Artworks</h5>
          <p>We have best artist and good suppliers</p>
        </div>
      </div>
      <div class="carousel-item">
        <img className="cImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VEPlfeQj-v8jiCFFrQxalwAAAA%26pid%3DApi&f=1&ipt=ffe21e918c070fbddc85ba42740ad1bf6279bd93ddac10787fac99fc56ae6257&ipo=images" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>Pencil Artworks</h5>
          <p>We have best artist and good suppliers</p>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
  </div>
  );
}

export default Carousel;