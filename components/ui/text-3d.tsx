import React, { useRef } from 'react'

type props = {
  primary: string
  secondary: string
}

export const Text3d = ({ primary, secondary }: props) => {
  const text1 = useRef(null)
  const text2 = useRef(null)

  return (
    <div className="relative cursor-pointer flex items-center justify-center textContainer duration-500">
      <p className="text-9xl font-semibold bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent primary3d" ref={text1}>
        {primary}
      </p>
      <p className="absolute top-0 opacity-0 text-primary secondary3d text-9xl font-semibold" ref={text2}>
        {secondary}
      </p>
    </div>
  )
}

