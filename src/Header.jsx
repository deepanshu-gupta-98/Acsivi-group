import React from 'react'

function Header() {
  return (
    <>
    <div className="header">
      <div>
      <h4 className="title">IT service built</h4>
      <h1 className="title1">Specifically for <br />your Business</h1>
      <h4 className="title2">let us provide the support you deserve</h4>
      <button className='btn1'>More</button>
      </div>
      <div className="main">
      <img src="/assets/pick2.jpg" alt="" className="pic" />
      </div>
    </div>
    <div className="second">
      <h1 className="title3">Let's grow <br />together...</h1>
    </div>


    <div>
      <h1 className="third">Who are We?</h1>
    </div>
   </>
  )
}

export default Header