import React, { createContext, useContext, ReactNode } from 'react'
import { restaurantConfig } from '../config/restaurantConfig'
import type { RestaurantConfig } from '../types/restaurant'

interface RestaurantContextType {
  config: RestaurantConfig
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined)

interface RestaurantProviderProps {
  children: ReactNode
}

export const RestaurantProvider: React.FC<RestaurantProviderProps> = ({ children }) => {
  const value = {
    config: restaurantConfig
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