import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ticket, Wallet, Award, User } from 'lucide-react';

const CustomerDashboard = () => {
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('https://suryabusandrailwaybooking.onrender.com/api/dashboards/customer/stats');
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white">
            <User size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-navy-900">Welcome, John Doe</h1>
            <p className="text-gray-500">Customer Dashboard</p>
          </div>
        </div>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <Ticket size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Upcoming Journeys</p>
                <p className="text-2xl font-bold text-navy-900">{stats.upcomingJourneys}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <Wallet size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Wallet Balance</p>
                <p className="text-2xl font-bold text-navy-900">{stats.walletBalance}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Reward Points</p>
                <p className="text-2xl font-bold text-navy-900">{stats.rewardPoints}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-navy-50">
            <h2 className="text-xl font-bold text-navy-900">Recent Bookings</h2>
          </div>
          <div className="p-6">
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center mb-4">
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <span className="font-bold text-navy-900">PNR123456789</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Confirmed</span>
                </div>
                <p className="text-gray-600 font-medium">Shatabdi Express (12007)</p>
                <p className="text-sm text-gray-500">Bengaluru ➔ Chennai | 24th Jun 2026</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-2">
                <button className="btn-secondary px-4 py-2 text-sm">Download</button>
                <button className="text-red-600 border border-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
