# Quick Customization Guide

This guide helps you quickly customize the restaurant template for your client's needs.

## 🎯 Essential Changes (Required)

### 1. Restaurant Basic Info
File: `/src/config/restaurantConfig.ts`

```typescript
info: {
  name: "CLIENT_RESTAURANT_NAME",           // ← Change this
  tagline: "CLIENT_TAGLINE",                // ← Change this  
  description: "CLIENT_DESCRIPTION...",     // ← Change this
  phone: "+91XXXXXXXXXX",                  // ← Client's phone
  email: "client@email.com",               // ← Client's email
  
  address: {
    street: "Client's Street Address",      // ← Update all
    city: "Client's City",
    state: "Client's State", 
    zipCode: "Client's ZIP",
    country: "India"
  }
}
```

### 2. WhatsApp Number
**IMPORTANT**: Update this if client wants their own WhatsApp integration

```typescript
// Keep your number (current)
whatsappNumber: "919701524184",

// OR use client's number
whatsappNumber: "91CLIENTNUMBER",
```

### 3. Operating Hours
```typescript
hours: {
  "Monday": "11:00 AM - 10:00 PM",        // ← Update client's hours
  "Tuesday": "11:00 AM - 10:00 PM", 
  "Wednesday": "11:00 AM - 10:00 PM",
  // ... continue for all days
}
```

## 🍽️ Menu Customization

### Replace Sample Menu
1. **Get client's menu** (prices, descriptions, categories)
2. **Take/get food photos** (high quality, well-lit)
3. **Update menu structure**:

```typescript
menu: [
  {
    id: "starters",                          // ← Category ID
    name: "Starters",                        // ← Display name
    description: "Begin your meal...",       // ← Category description
    items: [
      {
        id: "item1",
        name: "CLIENT_DISH_NAME",            // ← Real dish name
        description: "CLIENT_DESCRIPTION",   // ← Real description
        price: 150,                          // ← Real price
        category: "starters",
        image: "https://CLIENT_IMAGE_URL",   // ← Real food photo
        isVegetarian: true,                  // ← Accurate info
        isSpicy: false,
        isPopular: true,                     // ← Mark bestsellers
        whatsappMessage: "I'd like to order CLIENT_DISH_NAME (₹150). Is it available?"
      }
    ]
  }
]
```

## 📸 Images & Gallery

### Replace Sample Images
1. **Food Photos**: High-quality, well-lit dishes
2. **Interior Photos**: Dining area, ambiance
3. **Exterior Photos**: Restaurant facade, signage
4. **Event Photos**: Special occasions (if available)

```typescript
gallery: [
  {
    id: "client-food-1",
    url: "CLIENT_FOOD_IMAGE_URL",           // ← Replace with real photos
    alt: "CLIENT_DISH_DESCRIPTION",
    category: "food"
  },
  {
    id: "client-interior-1", 
    url: "CLIENT_INTERIOR_IMAGE_URL",       // ← Restaurant interior
    alt: "CLIENT_RESTAURANT_INTERIOR",
    category: "interior"
  }
]
```

### Image Requirements
- **Format**: JPG, PNG, WebP
- **Size**: 1200px width minimum  
- **Quality**: High resolution, good lighting
- **Aspect Ratio**: 16:9 or 4:3 preferred

## ⭐ Customer Reviews

### Replace with Real Reviews
```typescript
reviews: [
  {
    id: "real-review-1",
    name: "REAL_CUSTOMER_NAME",             // ← Real customer
    rating: 5,                              // ← Actual rating
    comment: "REAL_REVIEW_TEXT",            // ← Real review
    date: "2024-01-15",                     // ← Review date
    avatar: "CUSTOMER_PHOTO_URL"            // ← Optional: real photo
  }
]
```

**Getting Real Reviews:**
- Ask client for existing reviews (Google, Zomato)
- Get permission to use customer names
- Use recent reviews (last 6 months)

## 🎨 Branding & Colors

### Custom Colors (Optional)
File: `/tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#f0fdf4',     // ← Light green (current)
    500: '#22c55e',    // ← Main green (change if needed)
    600: '#16a34a',    // ← Dark green
  },
  secondary: {
    500: '#eab308',    // ← Accent yellow (change if needed)
  }
}
```

### Logo Replacement
File: `/src/components/Header/Header.tsx`

**Current**: Text-based logo
**To add image logo**:
```jsx
// Replace text with image
<img src="/logo.png" alt="Restaurant Name" className="h-8 w-auto" />
```

## 📱 Social Media Links

```typescript
socialMedia: {
  facebook: "https://facebook.com/CLIENT_PAGE",     // ← Real Facebook
  instagram: "https://instagram.com/CLIENT_HANDLE", // ← Real Instagram  
  twitter: "https://twitter.com/CLIENT_HANDLE",     // ← If they have Twitter
  youtube: "https://youtube.com/CLIENT_CHANNEL"     // ← If they have YouTube
}
```

## 🗺️ Location Integration

### Google Maps
Update the address in Contact section:
```typescript
// Address automatically generates Google Maps link
// Ensure address is accurate for proper map integration
```

## 🚀 Pre-Launch Checklist

### Content Review
- [ ] Restaurant name & tagline updated
- [ ] All menu items replaced with real dishes
- [ ] Prices accurate and current
- [ ] Photos are client's actual food/restaurant
- [ ] Contact information correct
- [ ] Operating hours accurate
- [ ] WhatsApp number working

### Technical Check
- [ ] All images loading properly
- [ ] WhatsApp buttons functional
- [ ] Contact form working
- [ ] Mobile responsiveness tested
- [ ] Loading speed acceptable

### Client Approval
- [ ] Show client preview/demo
- [ ] Get approval on design/content
- [ ] Test WhatsApp integration with client
- [ ] Confirm all details accurate

## 📞 Support & Delivery

### What to Deliver to Client
1. **Live Website URL** (if hosted)
2. **Admin Guide** (how to update menu/info)
3. **WhatsApp Setup Guide** 
4. **Basic maintenance instructions**

### Ongoing Support
- Menu updates: ₹500-1000 per update
- New photos: ₹1000-2000  
- Major changes: ₹2000-5000
- Monthly maintenance: ₹2000-5000

---

**💡 Pro Tip**: Always take screenshots during customization process to show client the before/after transformation!