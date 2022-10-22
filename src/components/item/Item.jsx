import React from "react";
import { useState } from "react";
import "../card/Card.css";

const Item = ({ veri }) => {
  const [open, setOpen] = useState(true);

  // console.log(veri);

  return (
    <div className="card " onClick={() => setOpen(!open)}>
      <div className="card-body">
        {open ? (
          <div>
            <img className="resim" src={veri.img} alt="" />

            <div>
              <h5 className="card-title mt-2 text-black">{veri.name}</h5>
            </div>
          </div>
        ) : (
          veri.options.map((item) => <li className="card-text"> {item} </li>)
        )}
      </div>
    </div>
  );
};

export default Item;
