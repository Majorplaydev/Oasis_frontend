import React from 'react'
import "./Gigs.scss"
import { useState } from 'react'
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard"

const Gigs = () => {
  
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className='container'>
        <span className='gigCrumbs'> Oasis &gt; Graphics & Design&gt;</span>
        <h2>AI Artist</h2>
        <p>
          Explore the boundaries of art and technology with Oasis's AI artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type='text 'placeholder='min'></input>
            <input type='text 'placeholder='max'></input>
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy' >Sortby: </span>
            <span className='sortType'>{sort === "sales" ? "Best selling" : "Newest"}</span>
            <img src='./img/down.png' alt='' onClick={()=>setOpen(!open)}/>
            { open && (
              <div className='rightMenu'>
              { sort ==="sales" ? (
                <span onClick={()=>reSort("CreatedAt")}>Newest</span>
              ) : (
              <span onClick={()=>reSort("sales")}>Best Selling</span>
              )}
            </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((gig)=>(
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
    

  )
}

export default Gigs;
