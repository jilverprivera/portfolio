export interface Context {
  inViewFeature: string | null
  lastFullScreenFeature: string | null
  fullScreenFeature: string | null
  setInViewFeature: (feature: string | null) => void
  setFullScreenFeature: (feature: string | null) => void
  setLastFullScreenFeature: (feature: string | null) => void
  handleSetFullscreenFeature: (feature: string | null) => void
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  isHovered: boolean
  setIsHovered: (arg: boolean) => void
}

export interface ContextProvider {
  children: React.ReactNode
}

