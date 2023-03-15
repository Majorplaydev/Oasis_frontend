import React from 'react'
import "./myGigs.scss"
import { Link } from 'react-router-dom'


const myGigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'>
            <button className='link'>Add new gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="/img/catCard4.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>$350</td>
            <td>621-3</td>
            <td>
              <img className='delete' src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default myGigs