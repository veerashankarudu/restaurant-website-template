import React from 'react'
import { Star, Clock, MapPin } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'
import { openWhatsAppChat, whatsappMessages } from '../../utils/whatsapp'

const Hero: React.FC = () => {
  const { config } = useRestaurant()

  const handleWhatsAppOrder = () => {
    openWhatsAppChat(whatsappMessages.menuInquiry())
  }

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu')
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-secondary-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 leading-tight">
            {config.info.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-2 text-primary-200">
            {config.info.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {config.info.description}
          </p>
        </div>

        {/* Stats/Features */}
        <div className="slide-in-left flex flex-wrap justify-center items-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span>4.8 Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2">
            <Clock className="w-5 h-5 text-primary-400" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2">
            <MapPin className="w-5 h-5 text-red-400" />
            <span>Fresh Ingredients</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsAppOrder}
            className="whatsapp-btn text-lg px-8 py-4 min-w-[200px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
            </svg>
            Order on WhatsApp
          </button>
          
          <button
            onClick={scrollToMenu}
            className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
          >
            View Menu
          </button>
        </div>

        {/* Phone Number Display */}
        <div className="fade-in mt-8 text-center">
          <p className="text-gray-300 mb-2">Call us directly</p>
          <a 
            href={`tel:${config.info.phone}`}
            className="text-2xl font-bold text-white hover:text-primary-300 transition-colors duration-300"
          >
            {config.info.phone}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero