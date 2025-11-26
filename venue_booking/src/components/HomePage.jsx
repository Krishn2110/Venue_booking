import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

  const featuredEvents = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "June 15, 2024",
      location: "Convention Center",
      price: "$199",
      category: "Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Summer Music Festival",
      date: "July 20, 2024",
      location: "Central Park",
      price: "$89",
      category: "Music",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Business Leadership Workshop",
      date: "May 10, 2024",
      location: "Business Hub",
      price: "$149",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Food & Wine Expo",
      date: "August 5, 2024",
      location: "Exhibition Hall",
      price: "$75",
      category: "Food",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const categories = [
    { name: "All", icon: "🎯" },
    { name: "Music", icon: "🎵" },
    { name: "Conference", icon: "💼" },
    { name: "Workshop", icon: "🔧" },
    { name: "Sports", icon: "⚽" },
    { name: "Food", icon: "🍕" }
  ];

  const stats = [
    { number: "50K+", label: "Events Booked", icon: "🎉" },
    { number: "10K+", label: "Happy Customers", icon: "😊" },
    { number: "5K+", label: "Verified Vendors", icon: "✅" },
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Quick Booking",
      description: "Book events in just a few clicks with our streamlined process."
    },
    {
      icon: "🛡️",
      title: "Secure Payments",
      description: "Your transactions are protected with bank-level security."
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Get insights and analytics for better event planning."
    },
    {
      icon: "🔍",
      title: "Advanced Search",
      description: "Find exactly what you're looking for with our smart filters."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access our platform seamlessly on any device."
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our support team is always ready to help you."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Attendee",
      content: "EventFlow made finding and booking tickets so easy! I discovered amazing events I wouldn't have found otherwise.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60"
    },
    {
      name: "Michael Chen",
      role: "Event Organizer",
      content: "As a vendor, EventFlow has helped me reach a wider audience and manage my events efficiently. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60"
    },
    {
      name: "Emily Rodriguez",
      role: "Corporate Client",
      content: "We've used EventFlow for all our corporate events. The platform is professional, reliable, and saves us so much time.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">EF</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EventFlow</span>
                <p className="text-xs text-gray-500 -mt-1">Smart Event Booking</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                <span className="mr-1">🏠</span> Home
              </a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                <span className="mr-1">🎭</span> Events
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                <span className="mr-1">✨</span> Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                <span className="mr-1">💬</span> Testimonials
              </a>
              <a href="./about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                <span className="mr-1">ℹ️</span> About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/login')} className="hidden md:block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-medium shadow-md">
                Sign Up Free
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                  <span className="mr-2">🏠</span> Home
                </a>
                <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                  <span className="mr-2">🎭</span> Events
                </a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                  <span className="mr-2">✨</span> Features
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                  <span className="mr-2">💬</span> Testimonials
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center">
                  <span className="mr-2">ℹ️</span> About
                </a>
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-left">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Event Booking
              </span>
              <span className="block text-gray-800 mt-2">Made Effortless</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Discover amazing events or showcase your venue. One platform for all your event needs.
            </p>
            
            {/* Tab Navigation */}
            <div className="max-w-md mx-auto mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 inline-flex shadow-lg border border-gray-200">
                <button
                  onClick={() => setActiveTab('customer')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                    activeTab === 'customer'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  <span className="mr-2">🎫</span> I'm a Customer
                </button>
                <button
                  onClick={() => setActiveTab('vendor')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                    activeTab === 'vendor'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  <span className="mr-2">🏢</span> I'm a Vendor
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === 'customer' ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Find Your Perfect Event</h3>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                    <input
                      type="date"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 shadow-md">
                    Search Events
                  </button>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Grow Your Event Business</h3>
                  <p className="mb-6 text-gray-600">Reach thousands of potential customers and manage your events efficiently.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-left">
                      <h4 className="font-semibold mb-3 text-gray-800 flex items-center"><span className="mr-2 text-green-500">✓</span> Reach More Customers</h4>
                      <h4 className="font-semibold mb-3 text-gray-800 flex items-center"><span className="mr-2 text-green-500">✓</span> Easy Event Management</h4>
                      <h4 className="font-semibold mb-3 text-gray-800 flex items-center"><span className="mr-2 text-green-500">✓</span> Secure Payments</h4>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold mb-3 text-gray-800 flex items-center"><span className="mr-2 text-green-500">✓</span> Real-time Analytics</h4>
                      <h4 className="font-semibold mb-3 text-gray-800 flex items-center"><span className="mr-2 text-green-500">✓</span> Customer Reviews</h4>
                      <h4 className="font-semibold mb-3 text-gray-800 flex items-center"><span className="mr-2 text-green-500">✓</span> 24/7 Support</h4>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 shadow-md">
                    Become a Vendor
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find events that match your interests across various categories
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition duration-300 cursor-pointer">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-gray-700">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Featured Events
              </h2>
              <p className="text-gray-600 mt-2">Handpicked events you don't want to miss</p>
            </div>
            <button className="hidden md:block text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              View All Events →
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3 text-sm">
                    <span className="mr-3 flex items-center"><span className="mr-1">📅</span> {event.date}</span>
                    <span className="flex items-center"><span className="mr-1">📍</span> {event.location}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-600">{event.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition duration-300 text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              View All Events →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Why Choose EventFlow?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our platform is designed to make event booking seamless for both attendees and organizers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers and vendors
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of customers and vendors who trust EventFlow for their event needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
              Explore Events
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              List Your Venue
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">EF</span>
                </div>
                <span className="text-xl font-bold">EventFlow</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making event booking simple and efficient for everyone.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">For Customers</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Browse Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">How to Book</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Customer Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">For Vendors</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">List Your Venue</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Vendor Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Vendor Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">📧</span> support@eventflow.com
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📞</span> +1 (555) 123-4567
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span> 123 Event Street, City, State 12345
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EventFlow. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;