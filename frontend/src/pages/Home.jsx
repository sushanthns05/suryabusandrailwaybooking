import React from 'react';
import { motion } from 'framer-motion';
import { Train, Bus, ShieldCheck, Clock, CreditCard, HeadphonesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white min-h-[500px] flex items-center pt-10 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-4"
            >
              Premium Travel Experience
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300"
            >
              Book Trains and Buses Seamlessly Across India
            </motion.p>
          </div>

          {/* Search Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card max-w-4xl mx-auto p-6"
          >
            <div className="flex justify-center space-x-4 mb-6">
              <button className="flex items-center gap-2 px-6 py-2 bg-navy-900 text-gold-500 rounded-full font-medium border border-gold-500 shadow-[0_0_15px_rgba(244,180,0,0.3)]">
                <Train size={20} /> Trains
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-transparent text-gray-600 hover:text-navy-900 transition-colors rounded-full font-medium">
                <Bus size={20} /> Buses
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input type="text" placeholder="e.g. Bengaluru" className="input-field" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input type="text" placeholder="e.g. Mysuru" className="input-field" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Journey Date</label>
                <input type="date" className="input-field" />
              </div>
              <div className="md:col-span-1 flex items-end">
                <button onClick={() => navigate('/search')} className="btn-primary w-full h-[42px] flex items-center justify-center text-lg">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center text-navy-900 mb-12">Why Choose SBRB?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-navy-50 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">100% secure and encrypted transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Tickets</h3>
              <p className="text-gray-600 text-sm">Get your tickets instantly via email and SMS.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-navy-50 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Easy Refunds</h3>
              <p className="text-gray-600 text-sm">Hassle-free cancellation and quick refunds.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">24x7 Support</h3>
              <p className="text-gray-600 text-sm">Dedicated customer service round the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Bengaluru → Mysuru', 'Bengaluru → Chennai', 'Mumbai → Delhi', 'Hyderabad → Tirupati'].map((route, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 hover:border-gold-500 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-navy-900 group-hover:text-gold-600">{route}</h4>
                  <span className="text-gray-400">➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
