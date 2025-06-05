import React from 'react'
import './Subscription.scss'
// import { FaEnvelope } from 'react-icons/fa'

function Subscription() { 
  return (
    <div className="subscription">
      <div className="subscription__container">
        <h1 className="subscription__title">
          Subscribe to Our Newsletter <br /> for Design Insights
        </h1>
        <p className="subscription__desc">
          Be the first to discover trends, inspirations, and special offers as we <br />
          bring the world of design directly to your inbox
        </p>
        <form className="subscription__form">
          <div className="subscription__input-wrapper">
            {/* <FaEnvelope className="subscription__icon" /> */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="subscription__input"
            />
          </div>
          <button type="submit" className="subscription__button">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Subscription
