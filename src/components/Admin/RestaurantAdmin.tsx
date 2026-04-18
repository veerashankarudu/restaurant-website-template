import React, { useState, useEffect } from 'react'
import { Save, Plus, Trash2, Settings, Menu as MenuIcon, Image, MapPin, LogOut, User } from 'lucide-react'
import { useRestaurant } from '../../context/RestaurantContext'
import { authService } from '../../services/authService'
import AdminLogin from './AdminLogin'

const RestaurantAdmin: React.FC = () => {
  const { config, refreshConfig } = useRestaurant()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('menu')
  const [currentAdminEmail, setCurrentAdminEmail] = useState('')

  // Admin data state
  const [adminData, setAdminData] = useState({
    restaurantName: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
    menuItems: [] as any[],
    gallery: [] as any[],
    chefSpecial: {
      name: '',
      description: '',
      price: 0,
      originalPrice: 0,
      specialPrice: 0,
      image: ''
    }
  })

  // Check authentication status on mount
  useEffect(() => {
    const loggedIn = authService.isLoggedIn()
    setIsAuthenticated(loggedIn)
    
    if (loggedIn) {
      const email = authService.getCurrentAdminEmail()
      if (email) {
        setCurrentAdminEmail(email)
      }
    }
  }, [])

  // Load existing data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('restaurant-admin-data')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setAdminData(prev => ({
          ...prev,
          ...parsed
        }))
      } catch (error) {
        console.error('Error loading admin data:', error)
      }
    } else {
      // Initialize with current config
      setAdminData({
        restaurantName: config.info.name,
        description: config.info.description,
        address: config.info.address.street + ', ' + config.info.address.city + ', ' + config.info.address.state,
        phone: config.info.phone,
        email: config.info.email,
        hours: config.info.hours,
        menuItems: config.menu.flatMap(category => category.items),
        gallery: config.gallery,
        chefSpecial: config.chefSpecial || {
          name: '',
          description: '',
          price: 0,
          originalPrice: 0,
          specialPrice: 0,
          image: ''
        }
      })
    }
  }, [config])

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    const email = authService.getCurrentAdminEmail()
    if (email) {
      setCurrentAdminEmail(email)
    }
  }

  const handleLogout = () => {
    authService.logout()
    setIsAuthenticated(false)
    setCurrentAdminEmail('')
  }

  const saveData = () => {
    localStorage.setItem('restaurant-admin-data', JSON.stringify(adminData))
    refreshConfig() // This will update the main website immediately
    alert('Data saved successfully! Changes are now live on the website.')
  }

  const addMenuItem = () => {
    setAdminData(prev => ({
      ...prev,
      menuItems: [...prev.menuItems, {
        name: '',
        description: '',
        price: 0,
        category: 'Main Course',
        isVeg: true,
        image: ''
      }]
    }))
  }

  const removeMenuItem = (index: number) => {
    setAdminData(prev => ({
      ...prev,
      menuItems: prev.menuItems.filter((_, i) => i !== index)
    }))
  }

  const updateMenuItem = (index: number, field: string, value: any) => {
    setAdminData(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const addGalleryItem = () => {
    setAdminData(prev => ({
      ...prev,
      gallery: [...prev.gallery, {
        url: '',
        alt: '',
        category: 'Food'
      }]
    }))
  }

  const removeGalleryItem = (index: number) => {
    setAdminData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }))
  }

  const updateGalleryItem = (index: number, field: string, value: string) => {
    setAdminData(prev => ({
      ...prev,
      gallery: prev.gallery.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Settings className="text-orange-600" size={28} />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Restaurant Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Logged in as {currentAdminEmail}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={saveData}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Save size={20} />
                <span>Save Changes</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
            {[
              { id: 'info', name: 'Restaurant Info', icon: MapPin },
              { id: 'menu', name: 'Menu Items', icon: MenuIcon },
              { id: 'special', name: "Chef's Special", icon: Settings },
              { id: 'gallery', name: 'Gallery', icon: Image }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Restaurant Info Tab */}
        {activeTab === 'info' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Restaurant Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
                <input
                  type="text"
                  value={adminData.restaurantName}
                  onChange={(e) => setAdminData({...adminData, restaurantName: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={adminData.phone}
                  onChange={(e) => setAdminData({...adminData, phone: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={adminData.description}
                  onChange={(e) => setAdminData({...adminData, description: e.target.value})}
                  rows={3}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={adminData.address}
                  onChange={(e) => setAdminData({...adminData, address: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Menu Items Tab */}
        {activeTab === 'menu' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Menu Items</h2>
              <button
                onClick={addMenuItem}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-4">
              {adminData.menuItems.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateMenuItem(index, 'name', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) => updateMenuItem(index, 'price', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select
                        value={item.category}
                        onChange={(e) => updateMenuItem(index, 'category', e.target.value)}
                        className="w-full p-2 border rounded"
                      >
                        <option value="Appetizer">Appetizer</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Beverage">Beverage</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={item.description}
                      onChange={(e) => updateMenuItem(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={item.isVeg}
                          onChange={(e) => updateMenuItem(index, 'isVeg', e.target.checked)}
                          className="mr-2"
                        />
                        Vegetarian
                      </label>
                    </div>
                    <button
                      onClick={() => removeMenuItem(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chef's Special Tab */}
        {activeTab === 'special' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Chef's Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dish Name</label>
                <input
                  type="text"
                  value={adminData.chefSpecial.name}
                  onChange={(e) => setAdminData({
                    ...adminData,
                    chefSpecial: { ...adminData.chefSpecial, name: e.target.value }
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
                  <input
                    type="number"
                    value={adminData.chefSpecial.originalPrice}
                    onChange={(e) => setAdminData({
                      ...adminData,
                      chefSpecial: { ...adminData.chefSpecial, originalPrice: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Price</label>
                  <input
                    type="number"
                    value={adminData.chefSpecial.specialPrice}
                    onChange={(e) => setAdminData({
                      ...adminData,
                      chefSpecial: { ...adminData.chefSpecial, specialPrice: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={adminData.chefSpecial.description}
                  onChange={(e) => setAdminData({
                    ...adminData,
                    chefSpecial: { ...adminData.chefSpecial, description: e.target.value }
                  })}
                  rows={3}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Gallery Images</h2>
              <button
                onClick={addGalleryItem}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Image</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminData.gallery.map((image, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="aspect-video bg-gray-200 rounded mb-4 overflow-hidden">
                    {image.url && (
                      <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={image.url}
                        onChange={(e) => updateGalleryItem(index, 'url', e.target.value)}
                        className="w-full p-2 border rounded text-sm"
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                      <input
                        type="text"
                        value={image.alt}
                        onChange={(e) => updateGalleryItem(index, 'alt', e.target.value)}
                        className="w-full p-2 border rounded text-sm"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <select
                        value={image.category}
                        onChange={(e) => updateGalleryItem(index, 'category', e.target.value)}
                        className="px-3 py-1 border rounded text-sm"
                      >
                        <option value="Food">Food</option>
                        <option value="Interior">Interior</option>
                        <option value="Exterior">Exterior</option>
                      </select>
                      <button
                        onClick={() => removeGalleryItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RestaurantAdmin