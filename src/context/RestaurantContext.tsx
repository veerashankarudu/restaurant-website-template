import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { restaurantConfig } from '../config/restaurantConfig'
import type { RestaurantConfig } from '../types/restaurant'

interface RestaurantContextType {
  config: RestaurantConfig
  updateConfig: (newConfig: Partial<RestaurantConfig>) => void
  refreshConfig: () => void
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined)

interface RestaurantProviderProps {
  children: ReactNode
}

// Helper function to merge admin data with default config
const mergeConfigs = (defaultConfig: RestaurantConfig, adminData?: any): RestaurantConfig => {
  if (!adminData) return defaultConfig

  return {
    ...defaultConfig,
    name: adminData.restaurantName || defaultConfig.name,
    description: adminData.description || defaultConfig.description,
    address: adminData.address || defaultConfig.address,
    phone: adminData.phone || defaultConfig.phone,
    email: adminData.email || defaultConfig.email,
    hours: adminData.hours || defaultConfig.hours,
    menuItems: adminData.menuItems || defaultConfig.menuItems,
    gallery: adminData.gallery || defaultConfig.gallery,
    chefSpecial: adminData.chefSpecial || defaultConfig.chefSpecial
  }
}

export const RestaurantProvider: React.FC<RestaurantProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<RestaurantConfig>(restaurantConfig)

  // Function to load configuration from localStorage
  const loadConfig = () => {
    try {
      const adminData = localStorage.getItem('restaurant-admin-data')
      if (adminData) {
        const parsedData = JSON.parse(adminData)
        const mergedConfig = mergeConfigs(restaurantConfig, parsedData)
        setConfig(mergedConfig)
      }
    } catch (error) {
      console.error('Error loading admin data:', error)
      setConfig(restaurantConfig)
    }
  }

  // Function to update configuration
  const updateConfig = (newData: Partial<RestaurantConfig>) => {
    const updatedConfig = { ...config, ...newData }
    setConfig(updatedConfig)
    
    // Also save to localStorage for persistence
    localStorage.setItem('restaurant-admin-data', JSON.stringify(updatedConfig))
  }

  // Function to refresh configuration (useful after admin changes)
  const refreshConfig = () => {
    loadConfig()
  }

  // Load configuration on mount
  useEffect(() => {
    loadConfig()
  }, [])

  const value = {
    config,
    updateConfig,
    refreshConfig
  }

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  )
}

export const useRestaurant = (): RestaurantContextType => {
  const context = useContext(RestaurantContext)
  if (context === undefined) {
    throw new Error('useRestaurant must be used within a RestaurantProvider')
  }
  return context
}