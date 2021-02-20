import { useState, useEffect } from "react";
import "./style.css"
const Tile = (props) => {
  return (
    <>
      
        <div className={"tile-main"}>
          {props.date.getDate()}
        </div>
      
    </>
  );
};

export default Tile;
