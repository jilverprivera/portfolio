export interface IContext {
  inViewFeature: string | null
  lastFullScreenFeature: string | null
  fullScreenFeature: string | null
  setInViewFeature: (feature: string | null) => void
  setFullScreenFeature: (feature: string | null) => void
  setLastFullScreenFeature: (feature: string | null) => void
  handleSetFullscreenFeature: (feature: string | null) => void
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
}

export interface IContextProvider {
  children: React.ReactNode
}

