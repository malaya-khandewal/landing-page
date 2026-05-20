export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-white/10 pt-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-headline-md font-headline-md font-bold text-on-primary">
            BodhaAI
          </div>
          <p className="text-surface-variant text-label-md leading-relaxed">
            © 2026 BodhaAI.<br />
            Transforming Industries with<br />
            Intelligent AI Solutions.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="mailto:malaya@bodhaai.tech"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined text-[18px]">
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="#"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-[18px]">
                link
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-secondary-fixed">Quick Links</h4>
          <ul className="space-y-2 text-surface-variant">
            <li>
              <a
                className="hover:text-secondary-container transition-colors"
                href="#solutions"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary-container transition-colors"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary-container transition-colors"
                href="#why"
              >
                Why Choose Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-secondary-fixed">Legal</h4>
          <ul className="space-y-2 text-surface-variant">
            <li>
              <a className="hover:text-secondary-container transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-secondary-container transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-secondary-container transition-colors" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Address Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-secondary-fixed">Office Address</h4>
          <p className="text-surface-variant text-label-md leading-relaxed mb-4">
            Srijan Corporate Park,<br />
            Block-GP, Plot No. G2,<br />
            Sector V, Salt Lake City,<br />
            Kolkata – 700091, West Bengal, India
          </p>
          <div className="space-y-2 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-surface-variant text-label-md">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <a href="mailto:malaya@bodhaai.tech" className="hover:text-secondary-container transition-colors">
                malaya@bodhaai.tech
              </a>
            </div>
            <div className="flex items-center gap-2 text-surface-variant text-label-md">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <a href="tel:+919831121434" className="hover:text-secondary-container transition-colors">
                +91 9831121434
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
