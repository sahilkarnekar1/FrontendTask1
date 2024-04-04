import React from 'react'
import { Link } from 'react-router-dom'

const FirstContentComp = () => {
  return (
    <>
        <div className="contentdiv">
  <b><p>what's your email? ❤️ (only Gmail for now) ● </p></b>
  <p>tip: use your personal email so you never lose access to Amie. you can add work emails as sub-accounts.</p>
  <input type="text" placeholder="name@gmail.com" />
  <b><p>what's your first name? 🎈</p></b>
  <p>we also love nicknames!</p>
  <input type="text" placeholder="first Name" />
</div>
<Link to="/info"><button>Continue ➔ </button></Link>
    </>
  )
}

export default FirstContentComp