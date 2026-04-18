import React, { useState, useEffect } from 'react'
import { X, MessageCircle } from 'lucide-react'

import { openWhatsAppChat, whatsappMessages } from '../../utils/whatsapp'

const WhatsAppFloat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide on very top of page to avoid conflicting with hero section
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const quickActions = [
    {
      icon: '🍽️',
      label: 'View Menu',
      message: whatsappMessages.menuInquiry()
    },
    {
      icon: '📞',
      label: 'Make Reservation',
      message: whatsappMessages.reservation()
    },
    {
      icon: '🚚',
      label: 'Order Delivery',
      message: 'Hi! I\'d like to place a delivery order. Can you help me with the menu and delivery details?'
    },
    {
      icon: '❓',
      label: 'General Inquiry',
      message: whatsappMessages.general()
    }
  ]

  const handleQuickAction = (message: string) => {
    openWhatsAppChat(message)
    setIsExpanded(false)
  }

  const handleMainButtonClick = () => {
    if (isExpanded) {
      setIsExpanded(false)
    } else {
      openWhatsAppChat(whatsappMessages.general())
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Action Menu */}
      <div className={`mb-4 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.message)}
              className="group flex items-center space-x-3 bg-white shadow-lg rounded-full px-4 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg">{action.icon}</span>
              <span className="text-gray-700 font-medium text-sm whitespace-nowrap">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <div className="relative">
        {/* Expand/Collapse Button */}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700 transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="w-3 h-3" />
          </button>
        )}

        <button
          onClick={handleMainButtonClick}
          onMouseEnter={() => !isExpanded && setTimeout(() => setIsExpanded(true), 500)}
          className="whatsapp-float group"
          aria-label="WhatsApp Contact"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
          </svg>
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>

        {/* Tooltip */}
        <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
          !isExpanded ? 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0' : 'opacity-0 pointer-events-none'
        }`}>
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </div>
      </div>

      {/* Pulsing Ring Animation */}
      <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20" />
      
      {/* Status Indicator */}
      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
        <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
      </div>

      {/* Welcome Message Popup */}
      {!isExpanded && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Quick Help Available!
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Hi! Need help with orders, reservations, or have questions? I'm here to assist you instantly!
              </p>
              <p className="text-green-600 text-xs font-medium mt-2">
                • Fast response guarantee
                <br />
                • Order directly via chat
                <br />
                • Real-time support
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 -right-2 border-8 border-transparent border-l-white" />
        </div>
      )}
    </div>
  )
}

export default WhatsAppFloat