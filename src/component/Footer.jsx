import React from 'react'

function Footer() {
  return (
    <footer className="footer container">
        <div className="footer__upper-container">
        <div className="footer__left-container footer__container">
            <div className="footer__heading footer__logo-container">
            <img src="assets/logo/Logo.png" alt="Raul Tindogan" className="footer__logo" />
            </div>
            <blockquote>
            <p>"I hate <span className="highlight">PERFECTION</span>, to be perfect is to be unable to improve any further"</p>
            <footer><cite className="highlight">- Mayuri Kurotsuchi</cite></footer>
            </blockquote>
        </div>
        <div className="footer__container footer__center-container">
            <h3 className="footer__heading">Contact Me</h3>
            <p className="contact__paragraph"><i className="fa-solid fa-envelope"></i> tindoganraul@gmail.com</p>
            <p className="contact__paragraph"><i className="fa-solid fa-phone"></i> 09951770119</p>
        </div>
        <div className="footer__container footer__right-container">
            <h3 className="footer__heading">Social Links</h3>
            <div className="social__media">
            <a className="social__media--logo" href="https://instagram.com/imvryzyla?igshid=NzZlODBkYWE4Ng=="><i className="fa-brands fa-instagram"></i></a>
            <a className="social__media--logo" href="https://www.facebook.com/raul.tindogan.39"><i className="fa-brands fa-facebook"></i></a>
            <a className="social__media--logo" href="https://github.com/RaulTindogan"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
        </div>
        <div className="footer__bottom-container">
        <p>&copy;RAUL TINDOGAN 2023</p>
        </div>
    </footer>
  )
}

export default Footer