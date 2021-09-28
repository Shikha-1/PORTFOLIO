import React from "react";
import "../css/MenuItem.css"

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <lottie-player
                src={item.image}
                background="#eeeee4"
                speed="0.5"
                style={{ height: "250px", width: "relative" }}
                loop
                autoplay
              ></lottie-player>
              <ul className="hover-items">
                <li>
                  <a href={item.link1} target="_blank" rel="noopener noreferrer">
                    {item.icon1}
                  </a>
                  <a href={item.link2} target="_blank" rel="noopener noreferrer">
                    {item.icon2}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>{item.placholder}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
