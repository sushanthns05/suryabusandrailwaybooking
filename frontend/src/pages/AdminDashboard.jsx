import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Users, Ticket, IndianRupee, Map, Ban } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/dashboards/admin/stats');
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
        <div className="mb-8 border-b border-gray-200 pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-navy-900">Admin Dashboard</h1>
            <p className="text-gray-500">System Overview and Management Console</p>
          </div>
          <button className="btn-primary py-2 text-sm">Download Full Report</button>
        </div>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <Users size={24} className="mx-auto mb-2 text-blue-500" />
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Total Users</p>
              <p className="text-2xl font-bold text-navy-900">{stats.totalUsers}</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <Ticket size={24} className="mx-auto mb-2 text-gold-500" />
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Total Bookings</p>
              <p className="text-2xl font-bold text-navy-900">{stats.totalBookings}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <IndianRupee size={24} className="mx-auto mb-2 text-green-500" />
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Revenue</p>
              <p className="text-2xl font-bold text-navy-900">{stats.revenue}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <Map size={24} className="mx-auto mb-2 text-purple-500" />
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Active Routes</p>
              <p className="text-2xl font-bold text-navy-900">{stats.activeRoutes}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <Ban size={24} className="mx-auto mb-2 text-red-500" />
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Cancellations</p>
              <p className="text-2xl font-bold text-navy-900">{stats.cancellations}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-navy-50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-navy-900">Recent Transactions</h2>
              <a href="#" className="text-sm font-medium text-gold-600 hover:text-gold-700">View All</a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy-900">TXN{Math.floor(Math.random() * 1000000)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user{i}@example.com</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹ {Math.floor(Math.random() * 5000)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Success
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-navy-50">
              <h2 className="text-xl font-bold text-navy-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-colors group">
                <span className="font-medium text-navy-900 group-hover:text-gold-700">Add New Train Route</span>
                <span className="text-gray-400 group-hover:text-gold-500">➔</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-colors group">
                <span className="font-medium text-navy-900 group-hover:text-gold-700">Add New Bus Route</span>
                <span className="text-gray-400 group-hover:text-gold-500">➔</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-colors group">
                <span className="font-medium text-navy-900 group-hover:text-gold-700">Manage Employees</span>
                <span className="text-gray-400 group-hover:text-gold-500">➔</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-colors group">
                <span className="font-medium text-navy-900 group-hover:text-gold-700">View System Logs</span>
                <span className="text-gray-400 group-hover:text-gold-500">➔</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
