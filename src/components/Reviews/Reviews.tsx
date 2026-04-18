import React from 'react'
import { Star, Quote } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'

const Reviews: React.FC = () => {
  const { config } = useRestaurant()

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const averageRating = config.reviews.reduce((sum, review) => sum + review.rating, 0) / config.reviews.length
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    config.reviews.filter(review => review.rating === rating).length
  )

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who keep coming back for more!
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 slide-in-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <span className="text-5xl font-bold text-gray-900">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex space-x-1 mb-1">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Based on {config.reviews.length} reviews
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                Excellent rating from our customers
              </p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 w-8">
                    {rating} ⭐
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${config.reviews.length > 0 ? (ratingCounts[index] / config.reviews.length) * 100 : 0}%` 
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">
                    {ratingCounts[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 slide-in-right">
          {config.reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{review.comment}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-3">
                {review.avatar ? (
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {formatDate(review.date)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Reviews CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Love our food? Share your experience!
            </h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Leave us a review and let others know about your dining experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.google.com/search?q=restaurant+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Star className="w-4 h-4" />
                <span>Leave Google Review</span>
              </a>
              <button
                onClick={() => {
                  const message = "Hi! I'd like to share my feedback about my recent dining experience at your restaurant."
                  window.open(`https://wa.me/919701524184?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
                }}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                </svg>
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Positive Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews