// import { useEffect, useState } from 'react'
// import { useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'

type props = {
  path: string
  label: string
}

export const NavLink = ({ path, label }: props) => {
  // const textValue = useMotionValue(0)
  // const textColor = useTransform(textValue, [0, typeof window !== 'undefined' ? window.innerHeight : 0], ['#0A0A0A', '#FAFAFA'])
  // const [currentColor, setCurrentColor] = useState('#0A0A0A')

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY * 2
  //     textValue.set(scrollPosition)
  //     setCurrentColor(textColor.get())
  //   }
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', handleScroll)
  //   }
  //   return () => {
  //     if (typeof window !== 'undefined') {
  //       window.removeEventListener('scroll', handleScroll)
  //     }
  //   }
  // }, [textValue])
  return (
    <Link href={path}>
      <a className="text-neutral-400">{label}</a>
    </Link>
  )
}

