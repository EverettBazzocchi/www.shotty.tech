import Nav from './FooterComponents/Nav'

import "./FooterComponents/Footer.css";

const logo = "https://assets.darklordbazz.com/img/shottyAssets/logo-back.png"

const Footer = () => {
  return (
    <footer>
        <img id="Logo" src={logo} alt="logo" />
        <Nav />
        <div id="Contact-Links">
            <a target="_blank" rel="noreferrer" href="mailto:support@shotty.tech">support@shotty.tech</a>
            <a target="_blank" rel="noreferrer" href="https://discord.shotty.tech">discord.shotty.tech</a>
        </div>
    </footer>
  )
}

export default Footer