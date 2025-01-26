'use client'

import { type ImageLoader } from 'next/dist/client/image-component'
import { type OnLoadingComplete, type PlaceholderValue, type StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import { useMemo } from 'react'

import cva, { baseVariants, cn } from '@/lib/cva'

export interface ImageProps
  extends Omit<
    React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'alt' | 'height' | 'loading' | 'ref' | 'src' | 'srcSet' | 'width'
  > {
  alt?: string
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

const Image = (props: ImageProps) => {
  const { alt = '', className, height = 0, sizes = '100vw', src, width = 0, ...rest } = props

  const fullWidth = useMemo(() => !width, [width])
  const autoHeight = useMemo(() => !height, [height])

  return (
    <NextImage
      alt={alt}
      className={cn(imageVariants({ className, fullWidth, autoHeight }))}
      height={height}
      sizes={sizes}
      src={src}
      width={width}
      {...rest}
    />
  )
}
export default Image

const imageVariants = cva('', {
  variants: {
    ...baseVariants(['fullWidth']),
    autoHeight: {
      true: 'h-auto',
    },
  },
})
