import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'
import type { GalleryImage } from '../../types/restaurant'

const Gallery: React.FC = () => {
  const { config } = useRestaurant()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'events', name: 'Events' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? config.gallery 
    : config.gallery.filter(img => img.category === selectedCategory)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our restaurant, from our delicious dishes to our beautiful ambiance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 slide-in-left">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 slide-in-right">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="gallery-item group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-200">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 capitalize">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 fade-in">
            <div className="text-gray-400 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">There are no images in this category yet.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {config.gallery.length}
              </div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {config.gallery.filter(img => img.category === 'food').length}
              </div>
              <div className="text-gray-600">Food Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {config.gallery.filter(img => img.category === 'interior').length}
              </div>
              <div className="text-gray-600">Interior</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                4.8★
              </div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-lg font-medium mb-1">
                {selectedImage.alt}
              </h3>
              <p className="text-gray-300 text-sm capitalize">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery