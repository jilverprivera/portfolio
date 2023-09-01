// EASE: [0.83, 0, 0.17, 1]

export const PAGE_TRANSITION_PROPS = {
  DURATION: 0.8,
  EASE: [0.6, 0.01, -0.05, 0.95]
}

export const LAYOUT_MOTION_PROPS = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION_PROPS.DURATION,
      ease: PAGE_TRANSITION_PROPS.EASE
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION_PROPS.DURATION,
      ease: PAGE_TRANSITION_PROPS.EASE
    }
  }
}

export const BANNER_PROPS = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

export const LETTER_ANIMATION_PROPS = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: PAGE_TRANSITION_PROPS.EASE,
      duration: PAGE_TRANSITION_PROPS.DURATION
    }
  }
}

export const CAROUSEL_VARIANTS_PROPS = {
  enter: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1280 : -1280,
      opacity: 1
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1280 : -1280,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
}

