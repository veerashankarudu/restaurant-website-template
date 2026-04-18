export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  isVegetarian: boolean
  isSpicy: boolean
  isPopular?: boolean
  whatsappMessage?: string
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export interface RestaurantInfo {
  name: string
  tagline: string
  description: string
  phone: string
  whatsappNumber: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
  hours: {
    [key: string]: string
  }
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  category: 'food' | 'interior' | 'exterior' | 'events'
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

export interface ChefSpecial {
  id: string
  name: string
  description: string
  originalPrice: number
  specialPrice: number
  image: string
  availableUntil: string
  isVegetarian: boolean
  isSpicy: boolean
  whatsappMessage?: string
}

export interface RestaurantConfig {
  info: RestaurantInfo
  chefSpecial?: ChefSpecial
  menu: MenuCategory[]
  gallery: GalleryImage[]
  reviews: Review[]
  theme: {
    primaryColor: string
    secondaryColor: string
    fontFamily: string
  }
}

export interface WhatsAppConfig {
  number: string
  defaultMessage: string
  menuItemMessage: (itemName: string, price: number) => string
  reservationMessage: string
  generalInquiryMessage: string
}