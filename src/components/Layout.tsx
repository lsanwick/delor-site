import React, { FunctionComponent } from 'react'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet'
import './Layout.scss'
import Footer from './Footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu|Pacifico:400,500,800"
          rel="stylesheet"
        />
      </Helmet>
      <Navigation />
      <section className="section">
        <div className="container">{children}</div>
      </section>
      <Footer />
    </>
  )
}
export default Layout
