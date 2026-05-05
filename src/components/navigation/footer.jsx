import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.png" alt="Polydance logo" className="footer__logo" />
        </div>

        <div className="footer__contact">
          <a href="mailto:Polydancery@gmail.com" className="footer__email">
            <img src="/icon-email.svg" alt="Email icon" className="footer__icon" />
            Polydancery@gmail.com
          </a>

          <div className="footer__social">
            <a
              href="https://t.me/+gVnwdEdVOyU1YTNk"
              target="_blank"
              rel="noreferrer noopener"
              className="footer__social-link"
            >
              <img src="/icon-telegram.png" alt="Telegram" className="footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/polydance.fi/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer__social-link"
            >
              <img src="/icon-instagram.png" alt="Instagram" className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
