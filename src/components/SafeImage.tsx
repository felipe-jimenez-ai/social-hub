import { useState } from 'react'
import Image from 'next/image'

interface SafeImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function SafeImage({ src, alt, width, height, className }: SafeImageProps) {
  const [useRegularImg, setUseRegularImg] = useState(false)

  // List of allowed domains from next.config.js
  const allowedDomains = [
    'assets-jane-cac1-16.janeapp.net',
    'www.yourtechstory.com',
    'tse4.mm.bing.net'
  ]

  const isAllowedDomain = () => {
    try {
      const url = new URL(src)
      return allowedDomains.some(domain => url.hostname === domain)
    } catch {
      return false
    }
  }

  if (!useRegularImg && isAllowedDomain()) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => setUseRegularImg(true)}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width, height }}
    />
  )
}
