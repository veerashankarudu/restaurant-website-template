import type { RestaurantConfig } from '../types/restaurant'

export const restaurantConfig: RestaurantConfig = {
  info: {
    name: "Spice Garden",
    tagline: "Authentic Flavors, Memorable Experiences",
    description: "Experience the rich heritage of traditional cuisine with a modern twist. Our chefs craft each dish with passion, using authentic spices and fresh ingredients to create unforgettable culinary experiences.",
    phone: "+919701524184",
    whatsappNumber: "919701524184", // Your WhatsApp number
    email: "info@spicegarden.com",
    address: {
      street: "123 Flavor Street",
      city: "Foodie Town", 
      state: "Gourmet State",
      zipCode: "12345",
      country: "India"
    },
    socialMedia: {
      facebook: "https://facebook.com/spicegarden",
      instagram: "https://instagram.com/spicegarden",
      twitter: "https://twitter.com/spicegarden"
    },
    hours: {
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM", 
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 11:00 PM",
      "Saturday": "11:00 AM - 11:00 PM",
      "Sunday": "12:00 PM - 10:00 PM"
    }
  },
  // Chef's Special - Featured item of the day
  chefSpecial: {
    id: "todays-special",
    name: "Hyderabadi Dum Biryani",
    description: "Authentic Hyderabadi-style biryani cooked in sealed pot with aromatic basmati rice, tender mutton, and secret blend of spices. Limited quantity available!",
    originalPrice: 520,
    specialPrice: 399,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=800&h=600&fit=crop&crop=center",
    availableUntil: "11:59 PM Today",
    isVegetarian: false,
    isSpicy: true,
    whatsappMessage: "Hi! I'd like to order today's Chef's Special - Hyderabadi Dum Biryani (₹399). Is it still available?"
  },
  menu: [
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Start your culinary journey with our flavorful appetizers",
      items: [
        {
          id: "samosa",
          name: "Crispy Vegetable Samosa",
          description: "Golden-fried pastries filled with spiced potatoes and peas, served with mint chutney",
          price: 120,
          category: "appetizers",
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Crispy Vegetable Samosa (₹120). Can you help me with the order?"
        },
        {
          id: "chili-chicken",
          name: "Chili Chicken",
          description: "Succulent chicken pieces tossed in a spicy Indo-Chinese sauce with bell peppers",
          price: 280,
          category: "appetizers",
          image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: true,
          whatsappMessage: "I'd like to order Chili Chicken (₹280). Is it available for delivery?"
        },
        {
          id: "paneer-tikka",
          name: "Paneer Tikka",
          description: "Marinated cottage cheese cubes grilled to perfection with herbs and spices",
          price: 250,
          category: "appetizers",
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Paneer Tikka (₹250). What's the preparation time?"
        },
        {
          id: "chicken-wings",
          name: "Tandoori Chicken Wings",
          description: "Smoky grilled chicken wings marinated in yogurt and spices",
          price: 320,
          category: "appetizers",
          image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: true,
          whatsappMessage: "I'd like to order Tandoori Chicken Wings (₹320). How spicy are they?"
        },
        {
          id: "aloo-tikki",
          name: "Aloo Tikki Chat",
          description: "Crispy potato patties topped with chutneys, yogurt and crunchy sev",
          price: 150,
          category: "appetizers", 
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Aloo Tikki Chat (₹150). Is it available for takeaway?"
        },
        {
          id: "fish-tikka",
          name: "Fish Tikka",
          description: "Fresh fish marinated in aromatic spices and grilled to perfection",
          price: 380,
          category: "appetizers",
          image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: true,
          whatsappMessage: "I'd like to order Fish Tikka (₹380). What type of fish do you use?"
        }
      ]
    },
    {
      id: "mains",
      name: "Main Courses",
      description: "Hearty and satisfying main dishes crafted with authentic recipes",
      items: [
        {
          id: "butter-chicken",
          name: "Butter Chicken",
          description: "Tender chicken in a rich, creamy tomato-based sauce, served with basmati rice",
          price: 380,
          category: "mains",
          image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
          isVegetarian: false,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Butter Chicken with rice (₹380). Can you confirm availability?"
        },
        {
          id: "dal-makhani",
          name: "Dal Makhani",
          description: "Slow-cooked black lentils in a creamy, buttery sauce with aromatic spices",
          price: 220,
          category: "mains", 
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Dal Makhani (₹220). Do you serve it with naan?"
        },
        {
          id: "biryani",
          name: "Chicken Biryani",
          description: "Fragrant basmati rice layered with spiced chicken, served with raita and shorba",
          price: 420,
          category: "mains",
          image: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: true,
          isPopular: true,
          whatsappMessage: "I'd like to order Chicken Biryani (₹420). How spicy is it on a scale of 1-10?"
        },
        {
          id: "palak-paneer",
          name: "Palak Paneer",
          description: "Fresh cottage cheese cubes in a creamy spinach gravy with mild spices",
          price: 280,
          category: "mains",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Palak Paneer (₹280). Is it available for pickup?"
        },
        {
          id: "lamb-curry",
          name: "Mutton Rogan Josh",
          description: "Tender mutton cooked in aromatic spices and yogurt-based gravy",
          price: 450,
          category: "mains",
          image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: true,
          isPopular: true,
          whatsappMessage: "I'd like to order Mutton Rogan Josh (₹450). How long is the cooking time?"
        },
        {
          id: "fish-curry",
          name: "Kerala Fish Curry",
          description: "Fresh fish simmered in coconut milk with curry leaves and spices",
          price: 380,
          category: "mains",
          image: "https://images.unsplash.com/photo-1631292784640-95fa5cb64834?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: true,
          whatsappMessage: "I'd like to order Kerala Fish Curry (₹380). Do you serve it with rice?"
        },
        {
          id: "chole-bhature",
          name: "Chole Bhature",
          description: "Spicy chickpea curry served with fluffy deep-fried bread",
          price: 200,
          category: "mains",
          image: "https://images.unsplash.com/photo-1626132647056-3de8bea21434?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: true,
          isPopular: true,
          whatsappMessage: "I'd like to order Chole Bhature (₹200). How many bhature come with it?"
        }
      ]
    },
    {
      id: "breads",
      name: "Breads & Rice",
      description: "Freshly baked breads and aromatic rice preparations",
      items: [
        {
          id: "garlic-naan",
          name: "Garlic Naan",
          description: "Soft, fluffy bread topped with garlic and fresh coriander",
          price: 80,
          category: "breads",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Garlic Naan (₹80). How many pieces per order?"
        },
        {
          id: "jeera-rice",
          name: "Jeera Rice",
          description: "Aromatic basmati rice tempered with cumin seeds and whole spices",
          price: 150,
          category: "breads",
          image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Jeera Rice (₹150). What portion size do you serve?"
        },
        {
          id: "butter-naan",
          name: "Butter Naan",
          description: "Soft, fluffy bread brushed with butter and fresh herbs",
          price: 70,
          category: "breads",
          image: "https://images.unsplash.com/photo-1601050691267-6e82c4acd7d1?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Butter Naan (₹70). How many pieces per order?"
        },
        {
          id: "cheese-naan",
          name: "Cheese Naan",
          description: "Naan stuffed with melted cheese and garnished with coriander",
          price: 120,
          category: "breads",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Cheese Naan (₹120). Is it made with fresh cheese?"
        },
        {
          id: "tandoori-roti",
          name: "Tandoori Roti",
          description: "Whole wheat flatbread cooked in traditional clay oven",
          price: 50,
          category: "breads",
          image: "https://images.unsplash.com/photo-1607330289018-d4d5b2c0b379?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Tandoori Roti (₹50). Is it made fresh?"
        }
      ]
    },
    {
      id: "combos",
      name: "Value Combos",
      description: "Complete meals at great prices - perfect for sharing or solo dining",
      items: [
        {
          id: "family-feast",
          name: "Family Feast Combo",
          description: "Dal Makhani, Butter Chicken, 4 Naan, Jeera Rice, Dessert for 4 people",
          price: 1200,
          category: "combos",
          image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: false,
          isPopular:true,
          whatsappMessage: "I'd like to order the Family Feast Combo (₹1200). Can you deliver it hot?"
        },
        {
          id: "veg-delight",
          name: "Vegetarian Delight",
          description: "Dal Makhani, Palak Paneer, 2 Naan, Rice, Lassi and Dessert",
          price: 450,
          category: "combos",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Vegetarian Delight combo (₹450). What dessert is included?"
        },
        {
          id: "lunch-special",
          name: "Executive Lunch",
          description: "Choice of curry, rice, naan, salad, and drink - available 12-3 PM",
          price: 280,
          category: "combos",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&crop=center",
          isVegetarian: false,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Executive Lunch (₹280). What curry options are available today?"
        }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet endings to complete your meal",
      items: [
        {
          id: "gulab-jamun",
          name: "Gulab Jamun",
          description: "Soft, spongy milk dumplings soaked in aromatic sugar syrup",
          price: 120,
          category: "desserts",
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Gulab Jamun (₹120). How many pieces in one serving?"
        },
        {
          id: "kulfi",
          name: "Malai Kulfi",
          description: "Traditional Indian ice cream with cardamom and pistachios",
          price: 100,
          category: "desserts",
          image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Malai Kulfi (₹100). Is it available today?"
        },
        {
          id: "ras-malai",
          name: "Ras Malai",
          description: "Soft cottage cheese dumplings in sweet, thickened milk with nuts",
          price: 140,
          category: "desserts",
          image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Ras Malai (₹140). How many pieces per serving?"
        },
        {
          id: "kheer",
          name: "Rice Kheer",
          description: "Creamy rice pudding flavored with cardamom and garnished with nuts",
          price: 90,
          category: "desserts",
          image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Rice Kheer (₹90). Is it served warm or cold?"
        }
      ]
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Refreshing drinks to complement your meal",
      items: [
        {
          id: "lassi",
          name: "Sweet Lassi",
          description: "Creamy yogurt-based drink with cardamom and rose essence",
          price: 80,
          category: "beverages",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Sweet Lassi (₹80). Do you have mango lassi as well?"
        },
        {
          id: "masala-chai",
          name: "Masala Chai",
          description: "Traditional spiced tea brewed with aromatic herbs and spices",
          price: 50,
          category: "beverages",
          image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Masala Chai (₹50). Can you make it extra strong?"        },
        {
          id: "mango-lassi",
          name: "Mango Lassi",
          description: "Thick, creamy yogurt drink blended with fresh mango pulp",
          price: 120,
          category: "beverages",
          image: "https://images.unsplash.com/photo-1553787434-6f89bbcc50f3?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          isPopular: true,
          whatsappMessage: "I'd like to order Mango Lassi (₹120). Is it made with fresh mangoes?"
        },
        {
          id: "nimbu-paani",
          name: "Fresh Lime Water",
          description: "Refreshing lime water with mint, perfect for hot weather",
          price: 60,
          category: "beverages",
          image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Fresh Lime Water (₹60). Can you make it extra minty?"
        },
        {
          id: "filter-coffee",
          name: "South Indian Filter Coffee",
          description: "Strong, aromatic coffee prepared in traditional South Indian style",
          price: 70,
          category: "beverages",
          image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop&crop=center",
          isVegetarian: true,
          isSpicy: false,
          whatsappMessage: "I'd like to order Filter Coffee (₹70). Is it served with sugar on the side?"        }
      ]
    }
  ],
  gallery: [
    {
      id: "food-1",
      url: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&crop=center",
      alt: "Delicious spicy chicken curry",
      category: "food"
    },
    {
      id: "food-2", 
      url: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop&crop=center",
      alt: "Creamy butter chicken with rice",
      category: "food"
    },
    {
      id: "interior-1",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      alt: "Elegant restaurant interior",
      category: "interior"
    },
    {
      id: "food-3",
      url: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800&h=600&fit=crop&crop=center",
      alt: "Aromatic chicken biryani",
      category: "food"
    },
    {
      id: "interior-2",
      url: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop&crop=center",
      alt: "Cozy dining area",
      category: "interior"
    },
    {
      id: "food-4",
      url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop&crop=center",
      alt: "Crispy golden samosas",
      category: "food"
    },
    {
      id: "exterior-1",
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center",
      alt: "Restaurant exterior at night",
      category: "exterior"
    },
    {
      id: "events-1",
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&crop=center",
      alt: "Special event dining",
      category: "events"
    },
    {
      id: "food-5",
      url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&crop=center",
      alt: "Tandoori grilled items",
      category: "food"
    },
    {
      id: "food-6",
      url: "https://images.unsplash.com/photo-1626132647056-3de8bea21434?w=800&h=600&fit=crop&crop=center",
      alt: "Traditional Indian thali",
      category: "food"
    },
    {
      id: "interior-3",
      url: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&h=600&fit=crop&crop=center",
      alt: "Private dining room",
      category: "interior"
    },
    {
      id: "events-2",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
      alt: "Birthday celebration setup",
      category: "events"
    },
    {
      id: "exterior-2",
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
      alt: "Restaurant garden seating",
      category: "exterior"
    },
    {
      id: "food-7",
      url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&crop=center",
      alt: "Sweet dessert collection",
      category: "food"
    },
    {
      id: "interior-4",
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop&crop=center",
      alt: "Bar and drinks counter",
      category: "interior"
    }
  ],
  reviews: [
    {
      id: "review-1",
      name: "Priya Sharma",
      rating: 5,
      comment: "Absolutely amazing food! The butter chicken was perfectly creamy and the naan was fresh. The WhatsApp ordering made it so convenient. Highly recommended!",
      date: "2024-01-15",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: "review-2", 
      name: "Rahul Patel",
      rating: 5,
      comment: "Best biryani in town! The flavors are authentic and the portion sizes are generous. The staff is very friendly and responsive on WhatsApp.",
      date: "2024-01-10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: "review-3",
      name: "Anita Desai",
      rating: 4,
      comment: "Great vegetarian options! The paneer tikka and dal makhani were exceptional. Will definitely order again through WhatsApp.",
      date: "2024-01-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "review-4",
      name: "Vikram Singh",
      rating: 5,
      comment: "Excellent service and delicious food. The masala chai is just like home. Quick response on WhatsApp made ordering a breeze!",
      date: "2024-01-05",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "review-5",
      name: "Meera Agarwal",
      rating: 5,
      comment: "The Family Feast combo was perfect for our gathering! Everything was hot and delicious. The Kerala fish curry was absolutely divine. Ordering via WhatsApp was super easy.",
      date: "2024-01-28",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "review-6", 
      name: "Arjun Mehta",
      rating: 4,
      comment: "Love the new combo meals! The Executive Lunch is great value for money. The tandoori chicken wings are a must-try. Fast delivery and excellent packaging.",
      date: "2024-01-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "review-7",
      name: "Kavya Nair",
      rating: 5,
      comment: "Outstanding experience! The mutton rogan josh melted in my mouth. The ras malai for dessert was the perfect ending. Will become a regular customer for sure!",
      date: "2024-01-22",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "review-8",
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Amazing variety in the menu now! The fish tikka appetizer was incredible, and the filter coffee reminded me of home. WhatsApp ordering makes it so convenient.",
      date: "2024-01-20",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ],
  theme: {
    primaryColor: "#22c55e",
    secondaryColor: "#eab308", 
    fontFamily: "Inter"
  }
}

export const whatsappConfig = {
  number: "919701524184", // Your WhatsApp number
  defaultMessage: "Hello! I'm interested in your restaurant. Can you help me with information?",
  menuItemMessage: (itemName: string, price: number) => 
    `Hi! I'd like to order ${itemName} (₹${price}). Is it available right now?`,
  reservationMessage: "Hi! I'd like to make a table reservation. Can you help me with available slots?",
  generalInquiryMessage: "Hello! I have some questions about your restaurant. Can you assist me?"
}