import React from 'react'

import Header from './Header'
import Routes from '../routes/routers'
import FooterApp from './FooterApp'
import Cartsmenu from './UI/carts/cartsmenu'
import { useSelector } from 'react-redux'

function Layout() {

  const showcart = useSelector(state =>state.cartUi.cartIsVisible)


  return (
    <div>
      <Header />

      { showcart ? <Cartsmenu /> : null }

      <div>
        <Routes />
      </div>
      <FooterApp />
    </div>
  )
}

export default Layout
