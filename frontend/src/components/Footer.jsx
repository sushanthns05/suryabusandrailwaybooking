import React from 'react';
import { Train } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 py-10 border-t border-navy-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gold-500 p-2 rounded-lg">
                <Train className="h-6 w-6 text-navy-900" />
              </div>
              <span className="text-white font-display font-bold text-xl tracking-wide">SBRB</span>
            </div>
            <p className="text-sm">Premium travel booking platform offering seamless train and bus reservations across India.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-500">Search Trains</a></li>
              <li><a href="#" className="hover:text-gold-500">Search Buses</a></li>
              <li><a href="#" className="hover:text-gold-500">Live Status</a></li>
              <li><a href="#" className="hover:text-gold-500">PNR Enquiry</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-500">Help Center</a></li>
              <li><a href="#" className="hover:text-gold-500">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-gold-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>1800-111-2222</li>
              <li>support@sbrb.com</li>
              <li>Bengaluru, Karnataka</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-navy-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Surya Bus and Railway Bookings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
