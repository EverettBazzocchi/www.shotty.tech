import TopNav from './HeaderComponents/TopNav'
import Banner from './HeaderComponents/Banner'
import Nav from './HeaderComponents/Nav'

import "./HeaderComponents/Header.css"

const Header = () => {
  return (
    <header>
        <TopNav />
        <Banner />
        <Nav />
    </header>
  )
}

export default Header