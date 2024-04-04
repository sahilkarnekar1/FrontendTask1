import React from 'react'
import "./infostyle.css";
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <>
    <div>
  <div className="contentdiv">
    <b><p className="txtP">we've started rolling out! 😍</p>
      <p>invites are sent in weekly batches so we can ship based on customer feedback and keep the app stable.</p></b>
  </div>
  <Link to="/form"><button>Let's gooo! ➔</button></Link>
</div>

    </>
  )
}

export default Info