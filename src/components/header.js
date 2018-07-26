import React from 'react'
import Link from 'gatsby-link'

import DomCologne from './RBC_Cologne_2.jpg'
import Stripes from './striche.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${DomCologne})`,
      backgroundSize: 'cover',
      color: 'white',
    }}
  >
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${Stripes})`,
        backgroundSize: 'repeat',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '80vh',
          margin: '0 auto',
          padding: '10%',
        }}
      >
        <h1 style={{
              fontFamily: 'Helvetica Neue',
              fontSize: '6.25rem',
              textTransform: 'uppercase',
              fontWeight: '200',
              letterSpacing: '5px',
              paddingBottom: '0.5em',
            }}>
          React Barcamp&nbsp;
          <sup style={{
            fontWeight: '100',
            fontSize: '0.59em',
            letterSpacing: '1px',
            textTransform: '' }}>2019</sup>
        </h1>
        <h3 style={{
            fontWeight: '500'
          }}>A React Barcamp in Cologne</h3>
        <h4 style={{
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
          January 26th - 27th, Cologne, Germany
        </h4>
        <p>
          <button style={{
            background: '#61DAFB',
            padding: '0.4em 2em',
            color: 'white',
            border: '1px solid #61DAFB',
            backgroundBlendMode: 'multiply',
            textTransform: 'uppercase'
            }}>Reserve your seat</button>
        </p>
      </div>
    </div>
  </div>
)

export default Header
