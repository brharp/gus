import React from 'react'
import PropTypes from 'prop-types'
import SkipLink from './skiplink'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
      <>
        <SkipLink mainContent="#content"/>
        <Header />
        <main id="content">
          {children}
        </main>
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout