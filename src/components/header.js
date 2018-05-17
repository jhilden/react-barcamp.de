import React from 'react'
import Link from 'gatsby-link'
import Plx from 'react-plx'

import DomCologne from '../pages/DomCologne.png'


const exampleParallaxData = [
  {
    start: '.header',
    startOffset: '60vh',
    duration: '30vh',
    properties: [
      {
        startValue: 0,
        endValue: -100,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];


const styles = {
  width: 100,
  height: 100,
  lineHeight: '100px',
  textAlign: 'center',
  borderRadius: 20,
  backgroundColor: '#34ba9c',
  color: '#fff',
  left: '50%',
  marginLeft: -50,
  top: 100,
  position: 'fixed',
  fontFamily: 'Helvetica, Arial, sans-serif',
}


const Header = ({ siteTitle }) => (
    <Plx
      parallaxData={exampleParallaxData}
      className="header"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${DomCologne})`,
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
      <h1 style={{ fontSize: '4.25rem' }}>
        React Barcamp&nbsp;
        <span style={{ fontWeight: '100' }}>2019</span>
      </h1>
      <h3 style={{ fontWeight: '300' }}>A React Barcamp in Cologne</h3>
      <h4 style={{ fontWeight: '100' }}>
        January 26th - 27th, Cologne, Germany
      </h4>
      <p>
        <button
          style={{
            background: 'transparent',
            padding: '0.4em 2em',
            color: 'white',
            textTransform: 'uppercase',
          }}
        >
          Register
        </button>
      </p>
    </div>
  </Plx>
)

export default Header
