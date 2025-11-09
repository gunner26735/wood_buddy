import { Hammer, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Hammer size={32} className="text-amber-500" />
              <div>
                <h3 className="text-xl font-bold">Wood Buddy</h3>
                <p className="text-xs text-amber-400 tracking-wider">Crafting Excellence</p>
              </div>
            </div>
            <p className="text-stone-400 mb-4 leading-relaxed">
              Delivering premium carpentry and furniture solutions with unmatched craftsmanship and dedication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-stone-400 hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-stone-400 hover:text-amber-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-stone-400 hover:text-amber-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-stone-400 hover:text-amber-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-stone-400">Corporate Office Solutions</li>
              <li className="text-stone-400">Residential Furniture</li>
              <li className="text-stone-400">Housing Society Projects</li>
              <li className="text-stone-400">Custom Furniture Design</li>
              <li className="text-stone-400">Interior Carpentry</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-stone-400">+91 98765 43210</p>
                  <p className="text-stone-400">+91 98765 43211</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-stone-400">info@bhavikfurniture.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              {currentYear} Wood Buddy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
