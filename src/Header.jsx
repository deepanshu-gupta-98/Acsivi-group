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
<div className='con'>
    <div className='box'>
      <h1 className="third">Who are We?</h1>
      <h4 className="des">Acsivi is a group of creative and tech-savvy individuals who <br />believe in the catalytic power of technology and the use of its <br /> knowledge to build a better experience for you.</h4>
    </div>
<div className='box2'>
      <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241219.jpg?t=st=1718262772~exp=1718266372~hmac=19d544ee0c50876dd0ee1a6d0939efea26b4218f25b48c31a6ba40336ddd1216&w=900" alt="" className="pic2" />
    </div>
    </div>
<div className='con'>
<div className='box2'>
      <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241219.jpg?t=st=1718262772~exp=1718266372~hmac=19d544ee0c50876dd0ee1a6d0939efea26b4218f25b48c31a6ba40336ddd1216&w=900" alt="" className="pic3" />
    </div>
    <div className='box'>
      <h1 className="third">What We do?</h1>
      <h4 className="des">Our experts provide solutions related to <br /> Education, IT, Design, IT development as well <br /> as Accounting and Business intelligence <br /> solutions from retail level to big scale <br /> organisations. So, in short, <br /> <br /> We got it all covered!</h4>
    </div>
    </div>
   </>
  )
}

export default Header