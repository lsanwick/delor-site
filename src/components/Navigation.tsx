import React from 'react'
import { Link } from 'gatsby'

type LinkInfo = {
  label: string
  url: string
}

const LINKS: LinkInfo[] = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Calendar',
    url: '/calendar',
  },
  {
    label: 'In the Classroom',
    url: '/classroom',
  },
  {
    label: 'Enrollment',
    url: '/enrollment',
  },
  {
    label: 'Parents',
    url: '/parents',
  },
  {
    label: 'FAQ',
    url: '/faq',
  },
  {
    label: 'Contact Us',
    url: '/contact',
  },
]

export default function Navigation() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item is-size-4" to="/">
          Delor Montessori School
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          {LINKS.map(({ label, url }) => (
            <Link activeClassName="is-active" className="navbar-item" to={url}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
