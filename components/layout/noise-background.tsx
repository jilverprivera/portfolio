import { useRouter } from 'next/router'

export const NoiseBackground = () => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <div
      className="noise"
      style={{
        backgroundColor: pathname.includes('work/[slug]')
          ? 'rgba(55, 65, 81, 0.009)'
          : 'rgba(55, 65, 81, 0.15)'
      }}
    />
  )
}

