import React, { useState, useEffect } from 'react'
import RestaurantAdmin from '../components/Admin/RestaurantAdmin'
import { restaurantConfig } from '../config/restaurantConfig'

const ADMIN_PASSWORD = 'restaurant2026' // Restaurant owner's password

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [restaurantData, setRestaurantData] = useState(restaurantConfig)

  // Check if already logged in (session storage)
  useEffect(() => {
    const adminSession = sessionStorage.getItem('restaurant-admin')
    if (adminSession === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('restaurant-admin', password)
    } else {
      alert('❌ Incorrect password! Please contact the developer.')
    }
  }

  const handleUpdateData = async (newData: any) => {
    try {
      // Save to localStorage (for demo)
      localStorage.setItem('restaurant-data', JSON.stringify(newData))
      setRestaurantData(newData)
      
      // In production, this would save to database:
      // await fetch('/api/restaurant/update', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newData)
      // })
      
      alert('✅ Restaurant data updated successfully!')
      
      // Refresh the main website to show changes
      window.location.reload()
      
    } catch (error) {
      alert('❌ Error saving data. Please try again.')
      console.error('Save error:', error)
    }
  }

  return (
    <RestaurantAdmin
      isAuthenticated={isAuthenticated}
      onLogin={handleLogin}
      restaurantData={restaurantData}
      onUpdateData={handleUpdateData}
    />
  )
}

export default AdminPage