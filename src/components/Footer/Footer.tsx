import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'
import { openWhatsAppChat, whatsappMessages } from '../../utils/whatsapp'

const Footer: React.FC = () => {
  const { config } = useRestaurant()
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    openWhatsAppChat(whatsappMessages.general())
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-4">
              {config.info.name}
            </h3>
            <p className="text-primary-400 mb-4 font-medium">
              {config.info.tagline}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {config.info.description}
            </p>
            
            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="whatsapp-btn mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
              </svg>
              Order on WhatsApp
            </button>

            {/* Social Media */}
            <div className="flex space-x-4">
              {config.info.socialMedia.facebook && (
                <a 
                  href={config.info.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {config.info.socialMedia.instagram && (
                <a 
                  href={config.info.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {config.info.socialMedia.twitter && (
                <a 
                  href={config.info.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`tel:${config.info.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {config.info.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${config.info.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {config.info.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>{config.info.address.street}</p>
                  <p>{config.info.address.city}, {config.info.address.state}</p>
                  <p>{config.info.address.zipCode}, {config.info.address.country}</p>
                </div>
              </div>
            </div>

            {/* Opening Hours Summary */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-2">Today's Hours</h5>
              <p className="text-gray-300">
                {config.info.hours[new Date().toLocaleDateString('en-US', { weekday: 'long' })] || 'Check our hours'}
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} {config.info.name}. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <button className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors duration-300">
              Terms of Service
            </button>
            <button className="hover:text-white transition-colors duration-300">
              Cookie Policy
            </button>
          </div>
          
          <div className="text-gray-400 text-sm">
            Built with ❤️ for great food
          </div>
        </div>
      </div>

      {/* WhatsApp Promo Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <p className="text-white font-medium">
              🎉 Order via WhatsApp and get 10% off your first order!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer