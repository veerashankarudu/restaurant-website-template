import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { restaurantConfig } from '../config/restaurantConfig'
import type { RestaurantConfig } from '../types/restaurant'

interface RestaurantContextType {
  config: RestaurantConfig
  updateConfig: (newConfig: Partial<RestaurantConfig>) => void
  updateRestaurantData: (newData: any) => Promise<void>
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
    info: {
      ...defaultConfig.info,
      name: adminData.restaurantName || defaultConfig.info.name,
      description: adminData.description || defaultConfig.info.description,
      phone: adminData.phone || defaultConfig.info.phone,
      email: adminData.email || defaultConfig.info.email,
      hours: typeof adminData.hours === 'string' ? JSON.parse(adminData.hours) : adminData.hours || defaultConfig.info.hours,
      address: {
        ...defaultConfig.info.address,
        street: adminData.address?.split(',')[0]?.trim() || defaultConfig.info.address.street,
        city: adminData.address?.split(',')[1]?.trim() || defaultConfig.info.address.city,
        state: adminData.address?.split(',')[2]?.trim() || defaultConfig.info.address.state
      }
    },
    menu: adminData.menuItems ? [
      {
        id: 'updated-menu',
        name: 'Updated Menu',
        description: 'Updated menu items',
        items: adminData.menuItems
      }
    ] : defaultConfig.menu,
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

  // Function for admin panel updates
  const updateRestaurantData = async (newData: any): Promise<void> => {
    try {
      const mergedConfig = mergeConfigs(restaurantConfig, newData)
      setConfig(mergedConfig)
      localStorage.setItem('restaurant-admin-data', JSON.stringify(newData))
    } catch (error) {
      console.error('Error updating restaurant data:', error)
      throw error
    }
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
    updateRestaurantData,
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