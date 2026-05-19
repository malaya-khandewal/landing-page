export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-white/10 pt-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-headline-md font-headline-md font-bold text-on-primary">
            Bodha AI
          </div>
          <p className="text-surface-variant text-label-md">
            © 2024 Bodha AI. Ancient Wisdom, Future Intelligence.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="#"
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

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h4 className="font-bold text-secondary-fixed">Newsletter</h4>
          <p className="text-surface-variant text-label-sm">
            Stay updated with the latest in AI innovation.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
          >
            <input
              className="bg-white/10 border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:ring-secondary focus:border-secondary focus:outline-none"
              placeholder="Email address"
              type="email"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-on-secondary p-2 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Subscribe"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
