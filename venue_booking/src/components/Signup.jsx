import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer',
    agreeToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // Handle signup logic here
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Join EventFlow</h3>
        <p className="text-gray-600">Choose how you want to use our platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
            formData.userType === 'customer' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, userType: 'customer' }))}
        >
          <div className="text-3xl mb-3">🎫</div>
          <h4 className="font-semibold text-gray-800 mb-2">I'm a Customer</h4>
          <p className="text-gray-600 text-sm">
            Looking for events to attend. I want to discover and book tickets for amazing experiences.
          </p>
        </div>

        <div 
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
            formData.userType === 'vendor' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, userType: 'vendor' }))}
        >
          <div className="text-3xl mb-3">🏢</div>
          <h4 className="font-semibold text-gray-800 mb-2">I'm a Vendor</h4>
          <p className="text-gray-600 text-sm">
            I want to list my venue or organize events. I need tools to manage bookings and reach customers.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={nextStep}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
      >
        Continue
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create Your Account</h3>
        <p className="text-gray-600">Enter your basic information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            placeholder="First name"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            placeholder="Last name"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Your Account</h3>
        <p className="text-gray-600">Create a strong password</p>
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          placeholder="Create a password"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters with numbers and symbols</p>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          placeholder="Confirm your password"
          required
        />
      </div>

      <label className="flex items-start">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
          required
        />
        <span className="ml-2 text-gray-700 text-sm">
          I agree to the{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
        </span>
      </label>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
        >
          Create Account
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-poppins">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">EF</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EventFlow</span>
                <p className="text-xs text-gray-500 -mt-1">Smart Event Booking</p>
              </div>
            </Link>
            
            <div className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Signup Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Step {currentStep} of 3</span>
                <span className="text-sm font-medium text-gray-700">
                  {formData.userType === 'customer' ? 'Customer' : 'Vendor'} Account
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
              </form>
            </div>

            {/* Benefits Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Quick Setup</h4>
                <p className="text-gray-600 text-sm">Get started in minutes</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Secure</h4>
                <p className="text-gray-600 text-sm">Your data is protected</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-xl">💬</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">24/7 Support</h4>
                <p className="text-gray-600 text-sm">We're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;