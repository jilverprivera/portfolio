import { createContext, useState } from 'react'
import { IContext, IContextProvider } from 'interfaces'

export const AppContext = createContext({} as IContext)

export const AppProvider = ({ children }: IContextProvider) => {
  const [inViewFeature, setInViewFeature] = useState<string | null>(null)
  const [fullScreenFeature, setFullScreenFeature] = useState<string | null>(null)
  const [lastFullScreenFeature, setLastFullScreenFeature] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleSetFullscreenFeature = (feature: string | null) => {
    setFullScreenFeature(feature)
    if (feature !== null) setLastFullScreenFeature(feature)
  }

  const state = {
    inViewFeature,
    setInViewFeature,
    fullScreenFeature,
    setFullScreenFeature,
    handleSetFullscreenFeature,
    setLastFullScreenFeature,
    lastFullScreenFeature,
    isOpen,
    setIsOpen,
    isHovered,
    setIsHovered
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

