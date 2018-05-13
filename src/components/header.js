import React from 'react'
import Link from 'gatsby-link'

import DomCologne from '../pages/DomCologne.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${DomCologne})`,
      color: 'white',
    }}
  >
    <div style={{
      width: '100%',
      height: '80vh',
      margin: '0 auto',
      padding: '10%',
    }}>
      <h1 style={{ fontSize: '4.25rem'}}>
        React Barcamp&nbsp;
        <span style={{fontWeight: '100'}}>2019</span>
      </h1>
      <h3 style={{fontWeight: '300'}}>A React Barcamp in Cologne</h3>
      <h4 style={{fontWeight: '100'}}>January 26th - 27th, Cologne, Germany</h4>
      <p>
        <button style={{
          background: 'transparent',
          padding: '0.4em 2em',
          color: 'white',
          textTransform: 'uppercase'
          }}>Register</button>
      </p>
    </div>
  </div>
)

export default Header
