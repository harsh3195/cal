import { useState, useEffect,useRef } from "react";
import Tile from "../../components/Tile";
import "./style.css";

const weekDays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const Diary = (props) => {
  const [days, setDays] = useState([]);
  const scroller = useRef(null);
  const getAllDays = (firstDate) => {
    let dates = [];
    for (let i = 0; i < 50; i++) {
      dates.push(
        new Date(
          firstDate.getFullYear(),
          firstDate.getMonth(),
          firstDate.getDate() + i
        )
      );
    }
    return dates;
  };

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth();
    let lastSunday = today.getDate() - today.getDay();
    lastSunday = new Date(today.getFullYear(), today.getMonth(), lastSunday);
    console.log(lastSunday);
    setDays(getAllDays(lastSunday));
    return () => {};
  }, []);


  function updateScrollPosition(e) {
    console.log("scrolling",e.target.scrollTop,e.target.scrollHeight);

}
  useEffect(() => {
    if (scroller && scroller.current) {
        scroller.current.addEventListener("scroll", updateScrollPosition, false);
        return function cleanup() {
             scroller.current.removeEventListener("scroll", updateScrollPosition, false);
        };
    }
}, []);

  
  
  return (

    <>
      
      <div className={"cal-main"} ref = {scroller} >
        
        {/* {weekDays.map(e=> <div style={{height:"50px",padding:"10px",borderBottom:"1px solid #f0f0f0",textAlign: "right"}}>{e}</div>)} */}
        {days.map((e) => {
          return <Tile date={e}></Tile>;
        })}
      </div>
    </>
  );
};

export default Diary;
