import "./Header.css"

const logo = "https://assets.darklordbazz.com/img/shottyAssets/logo-back.png"

const Banner = () => {
  return (
    <div id="Banner">
        <div id="Blur">
            <img id="Logo" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Banner