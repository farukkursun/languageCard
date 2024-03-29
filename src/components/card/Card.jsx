import { languages } from "../../helper/data.js";
import "./Card.css";

import baslik from "../../assets/react.svg";
import Item from "../item/Item.jsx";

const Card = () => {
 
  return (
    <div className="main">
      <div>
        <img className="baslikresim" src={baslik} alt="" />
      </div>
      <div className="cerceve">
        <h2 className=" mb-4 text-white">Languages</h2>

        <div className="kartcontainer ">
          {languages.map((veri, index) => {
            
            return <Item veri={veri} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
