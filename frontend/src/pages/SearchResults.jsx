import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Clock, IndianRupee, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/search/trains');
        setTrains(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrains();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-navy-900 mb-8">Search Results</h1>
        
        {loading ? (
          <div className="text-center py-20 text-xl font-medium text-gray-500">Loading...</div>
        ) : (
          <div className="space-y-6">
            {trains.map((train) => (
              <div key={train.id} className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 border border-gray-100 transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="bg-navy-50 text-navy-900 font-bold px-3 py-1 rounded-md text-sm">
                      {train.number}
                    </div>
                    <h2 className="text-xl font-bold text-navy-900">{train.name}</h2>
                  </div>
                  <div className="flex items-center gap-2 text-gold-600 font-bold text-lg">
                    <IndianRupee size={20} /> {train.fare} <span className="text-sm font-normal text-gray-500">onwards</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center gap-8 flex-1">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-navy-900">{train.dep}</div>
                      <div className="text-gray-500 text-sm flex items-center gap-1 justify-center"><MapPin size={14}/> {train.from}</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center px-4 relative">
                      <div className="w-full border-t-2 border-dashed border-gray-300 relative top-3"></div>
                      <div className="bg-white px-2 relative z-10 flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={14} /> {train.duration}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-navy-900">{train.arr}</div>
                      <div className="text-gray-500 text-sm flex items-center gap-1 justify-center"><MapPin size={14}/> {train.to}</div>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-auto">
                    <button 
                      onClick={() => navigate(`/booking/train/${train.id}`)}
                      className="w-full btn-primary px-8"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2 overflow-x-auto">
                  {train.classes.map(cls => (
                    <span key={cls} className="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600 bg-gray-50">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
