import TopNav from './Components/TopNav'
import Banner from './Components/Banner'
import Nav from './Components/Nav'

import "./Components/Header.css"

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