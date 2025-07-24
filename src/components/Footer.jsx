import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">OVERLAYS</h3>
            <p className="text-gray-400">
              Redefining streetwear for the digital generation. Fashion meets
              technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/overlays.now/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-yellow-400 p-2">
                  <Instagram className="w-5 h-5" />
                </button>
              </a>

              <a
                href="https://x.com/overlaysnow" // or actual handle if different
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-yellow-400 p-2">
                  <Twitter className="w-5 h-5" />
                </button>
              </a>

              <a
                href="https://www.youtube.com/@OverlaysNow" // assuming YouTube is hosted under Tech Burner
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-yellow-400 p-2">
                  <Youtube className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">SHOP</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/drops"
                  className="hover:text-yellow-400 transition-colors"
                >
                  New Drops
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/collabs"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Collabs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Overlays. All rights reserved. Designed for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
