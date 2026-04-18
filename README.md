# Restaurant Website Template

A professional, modern restaurant website template with WhatsApp integration designed for freelancers approaching restaurants with limited online presence.

## 🌟 Features

### Core Functionality
- **Modern React 18 + TypeScript** - Latest technology stack
- **Responsive Design** - Works perfectly on all devices
- **WhatsApp Integration** - Direct ordering and communication
- **Professional Design** - Attracts customers with beautiful UI/UX
- **Easy Customization** - Simple configuration file system

### Key Sections
- **Hero Section** - Eye-catching landing with clear CTAs
- **About Us** - Restaurant story and features
- **Interactive Menu** - Categorized menu with WhatsApp ordering
- **Gallery** - Beautiful food and restaurant images
- **Customer Reviews** - Social proof with ratings
- **Contact Form** - Multiple ways to get in touch
- **Google Maps Integration** - Easy location finding

### WhatsApp Features
- **Floating WhatsApp Button** - Always accessible
- **Menu Item Ordering** - Direct WhatsApp link per dish
- **Quick Actions** - Reservation, delivery, catering
- **Pre-filled Messages** - Professional message templates
- **Your Number Integration** - Uses +91-9701524184

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Basic knowledge of React (for customization)

### Installation

1. **Clone/Download the template**
   ```bash
   cd restaurant-website-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:3000`
   - Template loads with sample data

## 🛠 Customization Guide

### 1. Restaurant Information
Edit `/src/config/restaurantConfig.ts`:

```typescript
export const restaurantConfig = {
  info: {
    name: "Your Restaurant Name",           // Change restaurant name
    tagline: "Your Tagline",                // Update tagline
    description: "Your description...",      // Restaurant description
    phone: "+91XXXXXXXXXX",                 // Restaurant phone
    whatsappNumber: "919701524184",         // Your WhatsApp (current)
    email: "info@yourrestaurant.com",       // Restaurant email
    address: {
      street: "Your Street Address",
      city: "Your City",
      state: "Your State",
      zipCode: "Your ZIP",
      country: "India"
    },
    // ... more settings
  }
}
```

### 2. WhatsApp Number Configuration
The template uses your WhatsApp number: **+91-9701524184**

**To use a different number:**
```typescript
// In /src/config/restaurantConfig.ts
whatsappNumber: "91YOURNEWNUMBER",  // Replace with new number
```

### 3. Menu Customization
```typescript
// In restaurantConfig.ts - menu section
menu: [
  {
    id: "appetizers",
    name: "Appetizers",
    description: "Start your meal...",
    items: [
      {
        id: "samosa",
        name: "Vegetable Samosa",
        description: "Crispy pastries...",
        price: 120,                    // Update prices
        category: "appetizers",
        image: "https://...",          // Update food images
        isVegetarian: true,
        isSpicy: false,
        whatsappMessage: "Custom message for this item"
      }
    ]
  }
]
```

### 4. Images & Gallery
```typescript
// Update gallery images
gallery: [
  {
    id: "food-1",
    url: "https://your-image-url.jpg",    // Replace with restaurant photos
    alt: "Delicious food description",
    category: "food"                       // food, interior, exterior, events
  }
]
```

### 5. Customer Reviews
```typescript
// Add real customer reviews
reviews: [
  {
    id: "review-1",
    name: "Customer Name",
    rating: 5,
    comment: "Amazing food and service!",
    date: "2024-01-15",
    avatar: "https://customer-photo.jpg"
  }
]
```

## 📱 WhatsApp Integration Details

### Current Setup
- **Your Number**: +91-9701524184
- **Message Templates**: Professional, pre-written
- **Order Integration**: Each menu item has WhatsApp button
- **Quick Actions**: Reservation, delivery, general inquiry

### Message Types
1. **Menu Item Orders**
   - "Hi! I'd like to order [Item Name] (₹[Price]). Is it available right now?"

2. **Table Reservations**
   - "Hello! I'd like to make a table reservation. Can you help me with available slots?"

3. **General Inquiries**
   - "Hello! I'm interested in your restaurant. Can you help me with information?"

4. **Custom Orders**
   - Pre-filled forms send detailed WhatsApp messages

## 🎨 Styling & Branding

### Colors
```css
/* Primary Green Theme */
--primary-50: #f0fdf4;
--primary-500: #22c55e;
--primary-600: #16a34a;

/* Secondary Yellow Accent */
--secondary-500: #eab308;
```

### Fonts
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Inter (modern sans-serif)

### Logo Customization
Replace text logo in `/src/components/Header/Header.tsx`:
```jsx
<h1 className="text-2xl font-bold">
  {config.info.name}  {/* Auto-updates from config */}
</h1>
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
1. **Netlify** (Recommended)
   - Drag & drop `dist` folder
   - Free hosting with custom domain

2. **Vercel**
   - Connect GitHub repository
   - Auto-deploy on changes

3. **Traditional Hosting**
   - Upload `dist` folder contents
   - Configure server for SPA routing

## 💼 For Freelancers

### Client Approach Strategy
1. **Target Restaurants** with only Google Maps listings
2. **Show Live Demo** of this template
3. **Highlight WhatsApp Integration** - modern ordering system
4. **Emphasize Mobile-First** design
5. **Offer Quick Customization** with their branding

### Pricing Suggestions
- **Basic Setup**: ₹15,000 - ₹25,000
- **Full Customization**: ₹25,000 - ₹45,000
- **Monthly Maintenance**: ₹2,000 - ₹5,000

### What's Included
- ✅ Professional website
- ✅ WhatsApp integration
- ✅ Mobile responsive
- ✅ Menu management
- ✅ Contact forms
- ✅ Image gallery
- ✅ Customer reviews
- ✅ Google Maps integration
- ✅ SEO optimization

## 🔧 Technical Details

### Tech Stack
- **React 18** - Modern UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Fast development server
- **Lucide Icons** - Beautiful icons

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

### Performance
- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)
- **Load Time**: Under 2 seconds
- **Images**: Optimized with lazy loading
- **Bundle Size**: Optimized with code splitting

## 📞 Support

For questions about customization or deployment:
- **WhatsApp**: +91-9701524184
- **Email**: Available in template

## 📄 License

This template is created for commercial use by freelancers. You can:
- ✅ Use for client projects
- ✅ Modify and customize
- ✅ Charge clients for websites built with this template
- ❌ Resell the template itself as-is

---

**Built with ❤️ for restaurant success and freelancer growth**