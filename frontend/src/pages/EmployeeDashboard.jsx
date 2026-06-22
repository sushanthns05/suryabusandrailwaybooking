import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Users, FileCheck, IndianRupee } from 'lucide-react';

const EmployeeDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/dashboards/employee/stats');
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
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-display font-bold text-navy-900">Employee Dashboard</h1>
          <p className="text-gray-500">Manage bookings, verifications, and customer queries.</p>
        </div>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <Users size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Daily Bookings Handled</p>
                <p className="text-2xl font-bold text-navy-900">{stats.dailyBookings}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 border-l-4 border-gold-500">
              <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center">
                <FileCheck size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending Verifications</p>
                <p className="text-2xl font-bold text-navy-900">{stats.pendingVerifications}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <IndianRupee size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Revenue Handled</p>
                <p className="text-2xl font-bold text-navy-900">{stats.revenue}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-navy-50">
              <h2 className="text-xl font-bold text-navy-900">Recent Customer Queries</h2>
            </div>
            <div className="p-6 space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-navy-900">Ticket Refund Issue</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">Pending</span>
                  </div>
                  <p className="text-sm text-gray-600">Customer requested refund for cancelled train PNR123456789.</p>
                  <button className="mt-2 text-sm font-medium text-gold-600 hover:text-gold-700">Review Ticket</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-navy-50">
              <h2 className="text-xl font-bold text-navy-900">Verify Passenger IDs</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-10 text-gray-500">
                <FileCheck size={48} className="mx-auto text-gray-300 mb-4" />
                <p>No pending ID verifications.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeDashboard;
