export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <a className="logo" href="#">
              <span className="bindu" aria-hidden="true"></span>Bodha<span className="ai">AI</span>
            </a>
            <p>Transforming industries with intelligent AI solutions, from the City of Joy.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#why">Why BodhaAI</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Cookie policy</a></li>
            </ul>
          </div>
          <div>
            <h4>Office</h4>
            <address>
              Srijan Corporate Park, Block-GP, Plot No. G2,<br />
              Sector V, Salt Lake City,<br />
              Kolkata – 700091, West Bengal, India
              <a href="mailto:malaya@bodhaai.tech">malaya@bodhaai.tech</a>
              <a href="tel:+919831121434">+91 98311 21434</a>
            </address>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2026 BodhaAI. All rights reserved.</span>
          <span><span className="dev">सा विद्या या विमुक्तये</span> — knowledge is that which liberates</span>
        </div>
      </div>
    </footer>
  );
}
