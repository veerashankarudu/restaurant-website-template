# 🍽️ Restaurant Website Template with Admin Panel

A modern, responsive restaurant website template built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. Features a complete admin panel for restaurant owners to manage content independently.

## ✨ Features

### 🎨 Frontend Features
- **Responsive Design** - Works perfectly on all devices
- **Modern Design** - Clean, professional restaurant theme
- **Fast Performance** - Built with Vite for lightning-fast loading
- **WhatsApp Integration** - Direct ordering via WhatsApp
- **Interactive Gallery** - Beautiful image showcase
- **Menu Filtering** - Vegetarian/Non-vegetarian filtering
- **Chef's Special** - Highlighted promotional dishes
- **Customer Reviews** - Social proof section
- **Contact Forms** - Easy customer communication

### 🔐 Admin Panel Features
- **Secure Email Authentication** - Professional login system
- **Forgot Password** - Email-based password reset
- **Real-time Updates** - Changes reflect immediately on website
- **Menu Management** - Add/edit/remove menu items with prices
- **Gallery Management** - Upload and organize restaurant photos
- **Chef's Special Management** - Set promotional dishes with pricing
- **Restaurant Info Management** - Update contact details and hours
- **No Technical Knowledge Required** - User-friendly interface

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd restaurant-website-template

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Admin Panel Access

### For Restaurant Owners

#### **Accessing the Admin Panel**
1. Visit your website
2. Scroll to the bottom footer
3. Click the small "Admin" link in the footer
4. **OR** navigate directly to: `yourwebsite.com/admin`

#### **Default Login Credentials**
- **Email:** `admin@restaurant.com`
- **Password:** `admin123`

#### **Forgot Password?**
1. Click "Forgot your password?" on the login page
2. Enter your email address
3. Check for reset link (in demo, it shows in browser alert)
4. Click the reset link to set a new password

### Admin Panel Capabilities

#### **📋 Menu Management**
- Add new menu items with photos
- Update prices instantly
- Edit descriptions and categories
- Mark items as vegetarian/non-vegetarian
- Remove items from menu

#### **🍴 Chef's Special**
- Set featured dish of the day/week
- Configure original and special pricing
- Add compelling descriptions
- Update promotional images

#### **📸 Gallery Management**
- Upload new restaurant photos
- Organize by categories (Food, Interior, Exterior)
- Remove outdated images
- Manage photo descriptions

#### **📞 Restaurant Information**
- Update contact details
- Modify restaurant description
- Change address and phone numbers
- Update operating hours

## 🎯 For Developers

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header/
│   ├── Hero/
│   ├── Menu/
│   ├── Gallery/
│   ├── Admin/          # Admin panel components
│   └── ...
├── services/           # Authentication & API services
├── context/           # React Context for state management
├── config/           # Restaurant configuration
├── types/           # TypeScript type definitions
└── utils/          # Utility functions
```

### Key Technologies
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Authentication System
The admin panel uses a sophisticated authentication system:

- **Email-based login** with session management
- **Password reset via email** (simulated for demo)
- **Token-based password reset** with expiration
- **Secure session storage** for login persistence
- **Logout functionality** with session cleanup

## 🔧 Customization

### Changing Default Admin Credentials
Edit `/src/services/authService.ts`:
```typescript
const defaultAdmin: AdminUser = {
  email: 'your-email@restaurant.com',
  password: 'your-secure-password'
}
```

### Adding Email Service
Replace the simulated email in `authService.ts` with real email service:
```typescript
// Replace simulateEmailSending with actual email service
// Example: SendGrid, AWS SES, Nodemailer
```

### Styling Customization
- Edit `tailwind.config.js` for theme colors
- Modify component styles in respective `.tsx` files
- Update global styles in `src/index.css`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Various Platforms
- **Vercel**: Connect GitHub repo to Vercel
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `dist` folder contents

## 💼 Business Benefits

### For Restaurant Owners
- ✅ **Complete Independence** - Update content without developer help
- ✅ **Instant Updates** - Changes appear immediately on website
- ✅ **Cost Effective** - No recurring developer fees for content updates
- ✅ **Professional Management** - Easy-to-use admin interface
- ✅ **Secure Access** - Password-protected admin panel

### For Developers
- ✅ **Client Satisfaction** - Empowers clients with content control
- ✅ **Reduced Support** - Fewer client calls for basic updates
- ✅ **Professional Solution** - Comprehensive admin system
- ✅ **Scalable Architecture** - Easy to extend and customize
- ✅ **Modern Tech Stack** - Built with latest technologies

## 📱 WhatsApp Integration

### Setup WhatsApp Business
1. Get WhatsApp Business account
2. Note your business phone number
3. Update phone number in `src/config/restaurantConfig.ts`
4. Customize WhatsApp messages in `src/utils/whatsapp.ts`

### WhatsApp Features
- Direct order placement
- Menu item sharing
- Contact form integration
- Floating WhatsApp button

## 🏆 Success Story

This template solves a real business problem: **Restaurant owners needed constant developer help to update prices and menu items**. 

**Before**: Every price change required developer assistance
**After**: Restaurant owners independently manage their entire website content

The admin panel provides:
- Professional content management
- Immediate website updates  
- Complete owner independence
- Cost-effective solution

---

**Built with ❤️ for restaurateurs who want control over their digital presence.**