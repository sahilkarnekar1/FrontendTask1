import React from 'react'
import tIm from "./userTT.jpg";
import handIm from "./handim.png";
import "./style2.css";

const Thanks = () => {
  return (
    <> 
<div>
  <div className="textcont">
    {/* Changed the structure to put both <p> tags inside <b> */}
    <b>
      <font className="txtP">thanks so much</font>
      <font>for answering our questions, we hope to give you access to Amie soon <img className="imsmall" src={handIm} alt='im'/></font>
    </b>
  </div>
  <b><p>follow us on <font className="txtP">twitter/x</font>:)</p></b>
  <div className="userTT">
    <img className="userim" src={tIm} alt='Thanks' />
  </div>
</div>

    </>
  )
}

export default Thanks