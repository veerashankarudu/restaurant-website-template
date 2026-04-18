import { whatsappConfig } from '../config/restaurantConfig'

export const formatWhatsAppNumber = (number: string): string => {
  // Remove any non-digit characters and ensure proper format
  return number.replace(/\D/g, '')
}

export const createWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message)
  const phoneNumber = formatWhatsAppNumber(whatsappConfig.number)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export const openWhatsAppChat = (message: string): void => {
  const url = createWhatsAppUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const whatsappMessages = {
  // Menu item inquiry
  menuItem: (itemName: string, price: number) => 
    `Hi! I'm interested in ordering *${itemName}* (₹${price}). Is it available for delivery/pickup right now?`,
  
  // Table reservation
  reservation: () =>
    `Hello! I'd like to make a table reservation at Spice Garden. Can you help me check availability and book a table?`,
  
  // General inquiry
  general: () =>
    `Hello! I'm interested in your restaurant and would like to know more about your services. Can you help me?`,
  
  // Custom order
  customOrder: (items: string[]) =>
    `Hi! I'd like to place an order for the following items:\n${items.join('\n')}\n\nCan you confirm availability and total price?`,
  
  // Event booking
  eventBooking: () =>
    `Hello! I'm interested in booking your restaurant for a special event. Can you provide details about group bookings and packages?`,
  
  // Catering inquiry  
  catering: () =>
    `Hi! I'm looking for catering services for an upcoming event. Can you share your catering menu and pricing details?`,
  
  // Feedback
  feedback: (rating: number, comment: string) =>
    `Hello! I recently visited your restaurant and wanted to share my feedback:\nRating: ${rating}/5 stars\nComment: ${comment}`,
  
  // Location inquiry
  location: () =>
    `Hi! Can you share your exact location and directions? Also, what are your current operating hours?`,
  
  // Menu inquiry
  menuInquiry: () =>
    `Hello! Can you share your complete menu with current prices? I'm particularly interested in vegetarian options.`,
  
  // Delivery inquiry
  delivery: (address: string) =>
    `Hi! Do you deliver to this address: ${address}? What are the delivery charges and estimated time?`
}

export const getWhatsAppMessage = (type: keyof typeof whatsappMessages, ...args: any[]): string => {
  const messageFunc = whatsappMessages[type]
  if (typeof messageFunc === 'function') {
    return (messageFunc as any)(...args)
  }
  return whatsappConfig.defaultMessage
}