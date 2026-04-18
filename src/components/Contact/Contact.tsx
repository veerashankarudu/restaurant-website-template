import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'
import { openWhatsAppChat, whatsappMessages } from '../../utils/whatsapp'

const Contact: React.FC = () => {
  const { config } = useRestaurant()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hi! I'd like to get in touch with you.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    openWhatsAppChat(message)
  }

  const handleQuickAction = (type: 'reservation' | 'delivery' | 'catering' | 'general') => {
    switch (type) {
      case 'reservation':
        openWhatsAppChat(whatsappMessages.reservation())
        break
      case 'delivery':
        openWhatsAppChat("Hi! I'd like to place a delivery order. Can you share your delivery areas and charges?")
        break
      case 'catering':
        openWhatsAppChat("Hello! I'm interested in your catering services for an event. Can you provide details?")
        break
      case 'general':
        openWhatsAppChat(whatsappMessages.general())
        break
      default:
        openWhatsAppChat(whatsappMessages.general())
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, want to make a reservation, or need catering services? 
            We're here to help! Contact us via WhatsApp for the fastest response.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Contact Information
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                    <a 
                      href={`tel:${config.info.phone}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors duration-300"
                    >
                      {config.info.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call us for immediate assistance</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h4>
                    <button
                      onClick={() => handleQuickAction('general')}
                      className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors duration-300"
                    >
                      +{config.info.whatsappNumber}
                    </button>
                    <p className="text-gray-600 text-sm mt-1">Fastest way to reach us - 24/7 available</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                    <a 
                      href={`mailto:${config.info.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-300"
                    >
                      {config.info.email}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Send us your detailed inquiries</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {config.info.address.street}<br />
                      {config.info.address.city}, {config.info.address.state}<br />
                      {config.info.address.zipCode}, {config.info.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleQuickAction('reservation')}
                  className="flex items-center justify-center space-x-2 bg-primary-50 hover:bg-primary-100 text-primary-700 px-4 py-3 rounded-lg transition-colors duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Reserve Table</span>
                </button>
                <button
                  onClick={() => handleQuickAction('delivery')}
                  className="flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-lg transition-colors duration-300"
                >
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Order Delivery</span>
                </button>
                <button
                  onClick={() => handleQuickAction('catering')}
                  className="flex items-center justify-center space-x-2 bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Catering</span>
                </button>
                <button
                  onClick={() => handleQuickAction('general')}
                  className="flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-lg transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">General Info</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleWhatsAppSubmit(); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    >
                      <option value="">Select subject</option>
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Food Delivery">Food Delivery</option>
                      <option value="Catering Services">Catering Services</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="whatsapp-btn w-full justify-center text-lg py-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </form>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Note:</strong> This form will open WhatsApp with your message pre-filled. 
                  We respond to WhatsApp messages within minutes during business hours!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 fade-in">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Find Us</h3>
              <p className="text-gray-600 mt-1">Visit us at our location</p>
            </div>
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive map coming soon</p>
                <p className="text-sm mt-2">Use Google Maps to navigate to our address</p>
                <button
                  onClick={() => {
                    const address = `${config.info.address.street}, ${config.info.address.city}, ${config.info.address.state}`
                    window.open(`https://maps.google.com/search/${encodeURIComponent(address)}`, '_blank')
                  }}
                  className="btn-primary mt-4 inline-flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact