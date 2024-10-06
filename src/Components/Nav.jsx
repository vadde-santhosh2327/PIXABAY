import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function Nav() {
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState("");

  const change = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`)
        .then((res) => res.json())
        .then((val) => setApi(val.hits));
    }
  }, [search]); 

  return (
    <>
      <div id="background_division">
        <div id="navigation">
          <div className="nav-items">
            <span className="pixabay-logo" id="one">Pixabay</span>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search Pixabay"
                className="search-input"
                onChange={change}
              />
              <select className="dropdown">
                <option>All Images</option>
                <option>Photos</option>
                <option>Videos</option>
                <option>Illustrations</option>
                <option>Vectors</option>
              </select>
            </div>
            <button className="explore">Login</button>
            <Link to="/Register"><button id="bt2">Register</button></Link>
            <button className="upload-btn" id="two">Upload</button>
          </div>
        </div>
      </div>

      <div id="middle_div">
        <h1 id="h1_one">Stunning royalty-free images & royalty-free stock</h1>
        <p id="para_one">Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</p>
        <input
          type="text"
          placeholder="Search for all images on Pixabay"
          className="input_1"
          onChange={change}
        />
        <p id="para_2">Read more about the Content</p>
        <p id="para_3">Free images by yoskhu</p>
      </div>
      <br />

      <div id="button_div">
        <button className="button_2"><i class="fa-solid fa-house"></i> Home</button>
        <button className="button_2"><i class="fa-solid fa-photo-film"></i> Photos</button>
        <button className="button_2">Illustrations</button>
        <button className="button_2"><i class="fa-solid fa-vector-square"></i> Vectors</button>
        <button className="button_2"><i class="fa-solid fa-music"></i> Music</button>
        <button className="button_2"> SoundEffects</button>
        <button className="button_2"><i class="fa-solid fa-note-sticky"></i> Gifs</button>
      </div>
      <br /><br />

      <div >
      <div id="image-grid">
        {api
          .filter((x) => x.tags.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <img className="pixels_images"
              key={x.id}  
              src={x.webformatURL}
              alt={x.tags}
            />
          ))}
      </div>
      <Footer/>
      </div>
    </>
  );
}
