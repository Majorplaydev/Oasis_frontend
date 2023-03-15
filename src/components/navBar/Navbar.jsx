import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"
import userImg from "../../Img/oasis.png"

const Navbar = () => {

  const [active,setActive] = useState(false)
  const [open,setOpen] = useState(false)

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  };

  useEffect(() => {
    window.addEventListener("scroll",isActive);
  
    return () => {
      window.removeEventListener("scroll",isActive);
    };
  }, []);

  const currentUser = {
    id:1,
    userName:"Mitch Doe",
    isSeller:true,
  };
  

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className='container' >
        <div className='logo'>
        <Link to='/' className='link' >
          <span className='text'>O<span>asi</span>s</span>
        </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Oasis Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={()=>setOpen(!open)}>
            <img src={userImg} alt='' />
              <span>{currentUser?.userName}</span>
              {open && <div className='options'>
                {
                  currentUser?.isSeller && (
                    <>
                      <Link className='link' to="/mygigs">Gig</Link>
                      <Link className='link' to="/add">Add new gig</Link>
                    </>
                  )
                }
                <Link className='link' to="/orders">Orders</Link>
                <Link className='link' to="/messages">Messages</Link>
                <Link className='link' to="/">Logout</Link>
              </div>
              }
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && ( 
        <>
        <hr />
        <div className='menu'>
        <Link className="link " to="/">
              Graphics & Design
            </Link>
            <Link className="link " to="/">
              Video & Animation
            </Link>
            <Link className="link " to="/">
              Writing & Translation
            </Link>
            <Link className="link " to="/">
              Smart Contract & Nft
            </Link>
            <Link className="link " to="/">
              AI Services
            </Link>
            <Link className="link " to="/">
              Digital Marketing
            </Link>
            <Link className="link " to="/">
              Music & Audio
            </Link>
            <Link className="link " to="/">
              Programming & Tech
            </Link>
            <Link className="link " to="/">
              Business
            </Link>
            <Link className="link " to="/">
              Lifestyle
            </Link>
        </div>
        <hr />
        </>
      )}
    </div>
  )
}
 
export default Navbar;