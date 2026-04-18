import React, { useState } from 'react'
import { Leaf, Flame, Star } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'
import { openWhatsAppChat } from '../../utils/whatsapp'
import type { MenuItem } from '../../types/restaurant'

const Menu: React.FC = () => {
  const { config } = useRestaurant()
  const [selectedCategory, setSelectedCategory] = useState(config.menu[0]?.id || '')
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'vegetarian' | 'non-vegetarian'>('all')

  const handleWhatsAppOrder = (item: MenuItem) => {
    const message = item.whatsappMessage || 
      `Hi! I'd like to order ${item.name} (₹${item.price}). Is it available right now?`
    openWhatsAppChat(message)
  }

  const selectedCategoryData = config.menu.find(cat => cat.id === selectedCategory)
  
  // Filter items based on dietary preference
  const filteredItems = selectedCategoryData?.items.filter(item => {
    if (dietaryFilter === 'all') return true
    if (dietaryFilter === 'vegetarian') return item.isVegetarian
    if (dietaryFilter === 'non-vegetarian') return !item.isVegetarian
    return true
  }) || []

  // Get counts for each dietary type
  const getItemCount = (filter: 'all' | 'vegetarian' | 'non-vegetarian') => {
    if (!selectedCategoryData) return 0
    if (filter === 'all') return selectedCategoryData.items.length
    if (filter === 'vegetarian') return selectedCategoryData.items.filter(item => item.isVegetarian).length
    if (filter === 'non-vegetarian') return selectedCategoryData.items.filter(item => !item.isVegetarian).length
    return 0
  }

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and authentic recipes. 
            Order directly via WhatsApp for the fastest service!
          </p>
        </div>

        {/* Chef's Special Banner */}
        {config.chefSpecial && (
          <div className="mb-12 slide-in-up">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-dashed border-yellow-300 p-6 relative overflow-hidden">
              {/* Special Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                TODAY'S SPECIAL!
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Image */}
                <div className="relative">
                  <img 
                    src={config.chefSpecial.image} 
                    alt={config.chefSpecial.name}
                    className="w-full h-48 md:h-32 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {config.chefSpecial.isVegetarian && (
                      <div className="bg-green-600 text-white p-1 rounded-full" title="Vegetarian">
                        <Leaf className="w-3 h-3" />
                      </div>
                    )}
                    {config.chefSpecial.isSpicy && (
                      <div className="bg-red-600 text-white p-1 rounded-full" title="Spicy">
                        <Flame className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    🍽️ {config.chefSpecial.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {config.chefSpecial.description}
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg text-gray-500 line-through">
                        ₹{config.chefSpecial.originalPrice}
                      </span>
                      <span className="text-3xl font-bold text-red-600">
                        ₹{config.chefSpecial.specialPrice}
                      </span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                        Save ₹{config.chefSpecial.originalPrice - config.chefSpecial.specialPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    ⏰ Available until {config.chefSpecial.availableUntil}
                  </p>

                  <button
                    onClick={() => openWhatsAppChat(config.chefSpecial?.whatsappMessage || `Hi! I'd like to order today's Chef's Special - ${config.chefSpecial?.name} (₹${config.chefSpecial?.specialPrice})`)}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto md:mx-0"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                    </svg>
                    <span>Order Special Now!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 slide-in-left">
          {config.menu.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dietary Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 slide-in-right">
          <button
            onClick={() => setDietaryFilter('all')}
            className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              dietaryFilter === 'all'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
            All ({getItemCount('all')})
          </button>
          
          <button
            onClick={() => setDietaryFilter('vegetarian')}
            className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              dietaryFilter === 'vegetarian'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            Vegetarian ({getItemCount('vegetarian')})
          </button>
          
          <button
            onClick={() => setDietaryFilter('non-vegetarian')}
            className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              dietaryFilter === 'non-vegetarian'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            Non-Vegetarian ({getItemCount('non-vegetarian')})
          </button>
        </div>

        {/* Category Description */}
        {selectedCategoryData && (
          <div className="text-center mb-12 fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {selectedCategoryData.name}
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              {selectedCategoryData.description}
            </p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in-right">
          {filteredItems.length > 0 ? 
            filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="menu-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              {/* Item Image */}
              <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                
                {/* Popular Badge */}
                {item.isPopular && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Popular</span>
                  </div>
                )}
                
                {/* Dietary Indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {item.isVegetarian && (
                    <div className="bg-green-600 text-white p-1.5 rounded-full" title="Vegetarian">
                      <Leaf className="w-4 h-4" />
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-red-600 text-white p-1.5 rounded-full" title="Spicy">
                      <Flame className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {/* Item Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-2xl font-bold text-primary-600 ml-4">
                    ₹{item.price}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.isVegetarian && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Leaf className="w-3 h-3 mr-1" />
                      Vegetarian
                    </span>
                  )}
                  {item.isSpicy && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <Flame className="w-3 h-3 mr-1" />
                      Spicy
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(item)}
                  className="whatsapp-btn w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))
          : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 mb-4">
                <Leaf className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                No {dietaryFilter === 'vegetarian' ? 'vegetarian' : 'non-vegetarian'} items available in this category.
                Try selecting a different category or dietary preference.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us on WhatsApp for custom orders, special dietary requirements, or any questions about our menu.
            </p>
            <button
              onClick={() => openWhatsAppChat("Hi! I have a special request or question about your menu. Can you help me?")}
              className="whatsapp-btn text-lg px-8 py-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
              </svg>
              Custom Order Request
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu