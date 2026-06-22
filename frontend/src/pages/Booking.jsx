import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Booking = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success
  const [passengers, setPassengers] = useState([{ name: '', age: '', gender: '' }]);

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: '', age: '', gender: '' }]);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-navy-900 text-white' : 'bg-gray-300 text-gray-600'}`}>1</div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-navy-900' : 'bg-gray-300'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-navy-900 text-white' : 'bg-gray-300 text-gray-600'}`}>2</div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-gold-500' : 'bg-gray-300'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-gold-500 text-white' : 'bg-gray-300 text-gray-600'}`}>3</div>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Passenger Details</h2>
            {passengers.map((p, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border border-gray-200 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="input-field" placeholder="Enter Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input type="number" className="input-field" placeholder="Age" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select className="input-field">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            ))}
            
            <button onClick={handleAddPassenger} className="text-navy-900 font-medium border border-navy-900 px-4 py-2 rounded-lg hover:bg-navy-50 transition-colors mb-8">
              + Add Another Passenger
            </button>

            <div className="flex justify-end">
              <button onClick={() => setStep(2)} className="btn-primary px-8 py-3 text-lg">Proceed to Payment</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Payment</h2>
            <div className="mb-6 p-4 bg-navy-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-navy-900 font-medium">Base Fare (x{passengers.length})</span>
                <span className="font-bold">₹ {800 * passengers.length}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-navy-900 font-medium">Taxes & Fees</span>
                <span className="font-bold">₹ 150</span>
              </div>
              <div className="border-t border-gray-300 my-2 pt-2 flex justify-between items-center text-xl">
                <span className="text-navy-900 font-bold">Total Amount</span>
                <span className="font-bold text-gold-600">₹ {(800 * passengers.length) + 150}</span>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input type="text" required className="input-field" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry (MM/YY)</label>
                  <input type="text" required className="input-field" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input type="password" required className="input-field" placeholder="123" />
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button type="submit" className="btn-primary px-8 py-3 text-lg w-full">Pay Securely</button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-24 h-24 text-green-500" />
            </div>
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-8">Your PNR number is <span className="font-bold text-navy-900">PNR123456789</span>. A confirmation email has been sent to your registered email address.</p>
            <div className="flex justify-center gap-4">
              <button className="btn-secondary px-6" onClick={() => navigate('/dashboard/customer')}>View Bookings</button>
              <button className="btn-primary px-6 border border-gold-500">Download Ticket (PDF)</button>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Booking;
