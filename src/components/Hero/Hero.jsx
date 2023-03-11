import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container' >
            <div className='left'>
                <h1>Find the perfect <span>freelance</span> services for your Projects</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <img src='./img/search.png' alt='' />
                        <input type=' text' placeholder='Try "Building Smart contract" '/>
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Writing services</button>
                    <button>Video Editing</button>
                    <button>Web development</button>
                    <button>Graphics & Branding</button>
                    <button>Cryptocurrency & Nft</button>
                </div>
            </div>
            <div className='right'>
            <img src="./img/oasis.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero