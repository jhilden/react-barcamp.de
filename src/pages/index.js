import React from 'react'
import Link from 'gatsby-link'
import TwitterLogo from './twitter.svg'
import FacebookLogo from './facebook.svg'
import KitconceptLogo from './kitconcept.svg'

const IndexPage = () => (
  <div>
    <div>
      <h3>Sponsors & Partners</h3>
      <button>Become a sponsor</button>
    </div>
    <div style={{color: 'white', backgroundColor: '#102A51', padding: '2em',}}>
      <h3>Newsletter</h3>
      <p>Subscribe and stay updated.</p>
      <input type="email" placeholder="Your email address" />
      <button>Subscribe</button>
    </div>
    <div>
      <div style={{width: '33%', float: 'left'}}>
        <h3>About React Barcamp</h3>
        <p>BarCamp is an international network of user-generated conferences primarily focused around technology and the web. They are open, participatory workshop-events, the content of which is provided by participants.</p>
      </div>
      <div style={{ width: '33%', float: 'left' }}>
        <h3>Connect</h3>
        <li>
          <a href="#"><img src={TwitterLogo} alt="Twitter" /></a>
          <a href="#"><img src={FacebookLogo} alt="Facebook" /></a>
        </li>
      </div>
      <div style={{ width: '33%', float: 'left' }}>
        <h3>Organized by</h3>
        <img src={KitconceptLogo} alt="kitconcept GmbH" />
      </div>
    </div>
  </div>
)

export default IndexPage
