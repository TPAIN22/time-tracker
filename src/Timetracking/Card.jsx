import { useState } from "react";
import Daved from "./Daved";
import Exercise from "./Exercise";
import Play from "./Play";
import Selfcare from "./Selfcare";
import Social from "./Social";
import Study from "./Study";
import Work from "./Work"

function Card() {
  const [time, setTime] = useState('daily');

  return (
      <div className="gridd">
        <div className="gf1"><Daved time={time} setTime={setTime} /></div>
        <div className="gf2"><Work time={time} /></div>
        <div className="gf3"><Play time={time} /></div>
        <div className="gf4"><Study time={time} /></div>
        <div className="gf5"><Exercise time={time} /></div>
        <div className="gf6"><Social time={time} /></div>
        <div className="gf7"><Selfcare time={time} /></div>
      </div>
  );
}

export default Card;
