import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import classroom from '../assets/classroom.jpg'

export default function HomePage() {
  return (
    <Layout>
      <div className="columns is-mobile is-multiline">
        <div className="column is-full">
          <div className="header-image-wrapper image">
            <img src={classroom} />
          </div>
        </div>
        <div className="column is-one-quarter-desktop is-half-mobile">
          <div className="content">
            <h2>What's New?</h2>
            <p>View our calendar for upcoming school events and holidays.</p>
            <Link to="/calendar">Read More</Link>
          </div>
        </div>
        <div className="column is-one-quarter-desktop is-half-mobile">
          <div className="content">
            <h2>About Us</h2>
            <p>
              Delor Montessori has been serving the Cupertino & Sunnyvale
              community since 1986.
            </p>
            <Link to="/about">Read More</Link>
          </div>
        </div>
        <div className="column is-one-quarter-desktop is-half-mobile">
          <div className="content">
            <h2>In the Classroom</h2>
            <p>
              Learn about the programs we have to offer, from our infant toddler
              program up to Kindergarten.
            </p>
            <Link to="/classroom">Read More</Link>
          </div>
        </div>
        <div className="column is-one-quarter-desktop is-half-mobile">
          <div className="content">
            <h2>Contact Us</h2>
            <p>
              Have a question about any of our school programs? Contact us via
              phone or email today.
            </p>
            <Link to="/contact">Read More</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
