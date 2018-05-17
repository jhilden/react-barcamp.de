import React from 'react'
import Link from 'gatsby-link'
import Plx from 'react-plx'

import DomCologne from '../pages/DomCologne.png'


const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: "rotate"
      },
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0.75,
        property: "opacity"
      }
    ]
  },
  {
    start: 350,
    duration: 300,
    properties: [
      {
        startValue: "#3cb99c",
        endValue: "rgba(50,50,200,0.8)",
        property: "backgroundColor"
      },
      {
        startValue: 0,
        endValue: 100,
        property: "translateY"
      },
      {
        startValue: 0.75,
        endValue: 1,
        property: "opacity"
      }
    ]
  },
  {
    start: 700,
    duration: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 1.5,
        endValue: 2,
        property: "scale"
      },
      {
        startValue: 90,
        endValue: 0,
        property: "rotate"
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 2,
        property: "blur"
      }
    ]
  }
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
  <div
    style={{
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${DomCologne})`,
      color: 'white',
    }}
  >
    <Plx
      className="MyAwesomeParallax"
      parallaxData={exampleParallaxData}
      style={styles}
    />
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
  </div>
)

export default Header
