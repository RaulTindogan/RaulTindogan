import React, { useState } from 'react'

function Header() {

  const [burger_icon, setBurgerIconClass] = useState("fa-solid fa-bars burger-button burger-menu")
  const [burgerClick, setBurgerClicked] = useState(false)
  const [mobile_menu, setMobileMenu] = useState('mobile__navbar-container')

  const [activeItem, setActiveItem] = useState('home');

  function burgerClicked() {
    setBurgerClicked(!burgerClick)
    if(!burgerClick) {
        setBurgerIconClass("fa-solid fa-xmark burger-button burger-close")
        setMobileMenu('mobile__navbar-container mobile__nav--active')
    } else {
        setBurgerIconClass("fa-solid fa-bars burger-button burger-menu")
        setMobileMenu('mobile__navbar-container') 
    } 
  } 

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <header className="header" id="header">
        <nav className="navbar container">
            <div className="nav__logo-container">
                <a href="#home"><img src="assets/logo/Logo.png" alt="Raul Tindogan" className="nav__logo" /></a>
            </div>
            <ul className="nav__desktop-link-container">
                <a href="#home" className={`nav__desktop--link ${activeItem === 'home' ? 'desktop__navlink--isActive' : ''}`} onClick={() => handleItemClick('home')}><li>HOME</li></a>
                <a href="#about" className={`nav__desktop--link ${activeItem === 'about' ? 'desktop__navlink--isActive' : ''}`} onClick={() => handleItemClick('about')}><li>ABOUT</li></a>
                <a href="#project" className={`nav__desktop--link ${activeItem === 'project' ? 'desktop__navlink--isActive' : ''}`} onClick={() => handleItemClick('project')}><li>PROJECTS</li></a>
                <li><a href="assets/TINDOGAN_RAUL_CV.pdf" className="resume--button">RESUME</a></li>
            </ul>
            <div className="nav__hamburger-menu-container" id="burger-menu">
                <i className={burger_icon} onClick={burgerClicked}></i>
            </div>
        </nav>
        <div className={mobile_menu}>
            <ul className="nav__mobile-link-container">
                <a href="#home" className="nav__mobile--link"><li >HOME</li></a>
                <a href="#about" className="nav__mobile--link"><li>ABOUT</li></a>
                <a href="#project" className="nav__mobile--link"><li>PROJECTS</li></a>
                <li className="resume--link"><a href="assets/TINDOGAN_RAUL_CV.pdf" className="resume--button">RESUME</a></li>
                {/* <a href="#" className="nav__mobile--link resume--link"><li>RESUME</li></a> */}
            </ul>
        </div>
  </header>
   
  )
}

export default Header