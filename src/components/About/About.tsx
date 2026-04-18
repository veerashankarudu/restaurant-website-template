import React from 'react'
import { Award, Users, Clock, Heart } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'

const About: React.FC = () => {
  const { config } = useRestaurant()

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced from trusted suppliers to ensure exceptional taste and quality."
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our experienced chefs bring years of culinary expertise and passion to create authentic flavors."
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick preparation and delivery without compromising on quality. Order via WhatsApp for fastest service."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with care and attention to detail, ensuring a memorable dining experience."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6">
              About {config.info.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {config.info.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Located in the heart of {config.info.address.city}, we've been serving authentic cuisine 
              with a passion for excellence. Our commitment to quality ingredients, traditional recipes, 
              and exceptional service has made us a favorite among food lovers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
                  }}
                />
                <div 
                  className="h-32 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80)'
                  }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="h-32 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80)'
                  }}
                />
                <div 
                  className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-center text-gray-900 mb-12">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold font-serif text-center text-gray-900 mb-8">
            Operating Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {Object.entries(config.info.hours).map(([day, time]) => (
              <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">{day}</span>
                <span className="text-gray-600">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About