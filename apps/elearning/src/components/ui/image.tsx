'use client'

import { type ImageLoader } from 'next/dist/client/image-component'
import { type OnLoadingComplete, type PlaceholderValue, type StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import { useMemo } from 'react'

import { cn } from '@/lib/utils'

export interface ImageProps
  extends Omit<
    React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'alt' | 'height' | 'loading' | 'ref' | 'src' | 'srcSet' | 'width'
  > {
  alt?: string
  auto?: boolean
  blurDataURL?: string
  fill?: boolean
  height?: number | `${number}`
  layout?: string
  lazyBoundary?: string
  lazyRoot?: string
  loader?: ImageLoader
  loading?: 'eager' | 'lazy' | undefined
  objectFit?: string
  objectPosition?: string
  onLoadingComplete?: OnLoadingComplete
  overrideSrc?: string
  placeholder?: PlaceholderValue
  priority?: boolean
  quality?: number | `${number}`
  src: string | StaticImport
  unoptimized?: boolean
  width?: number | `${number}`
}

export const Image = ({
  alt = '',
  auto,
  className,
  height = 0,
  sizes = '100vw',
  src,
  width = 0,
  ...rest
}: ImageProps) => {
  const imageClasses = useMemo(() => {
    const classes = []
    if (auto || !height) classes.push('h-auto')
    if (auto || !width) classes.push('w-full')
    return cn(classes.join(' '), className)
  }, [auto, className, height, width])

  return (
    <NextImage alt={alt} className={imageClasses} height={height} sizes={sizes} src={src} width={width} {...rest} />
  )
}
