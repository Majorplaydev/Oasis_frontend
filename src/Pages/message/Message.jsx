import React from 'react'
import { Link } from 'react-router-dom'
import "./Message.scss"

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadCrumbs">
          <Link to="/messages" className='link'>MESSAGES</Link> > MITCH DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis
              icing elit. Ipsa incidunt officiis ratione sint e
              ius, saepe mollitia ex voluptas? Earum voluptas la
              bore eveniet voluptatem facere quod 
              ratione doloremque placeat reiciendis laudantium!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='Write your Message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message