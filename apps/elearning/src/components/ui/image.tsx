'use client'

import { type ImageLoader } from 'next/dist/client/image-component'
import { type OnLoadingComplete, type PlaceholderValue, type StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import { useMemo } from 'react'

import { baseVariants, cn, cva } from '@/lib/cva'

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

export const Image = (props: ImageProps) => {
  const { alt = '', className, height, sizes = '100vw', style, width, ...rest } = props

  const styles = useMemo(
    () => ({
      height: height ? (typeof height === 'string' ? height : `${height}px`) : 'auto',
      width: width ? (typeof width === 'string' ? width : `${width}px`) : 'auto',
      ...style,
    }),
    [height, style, width],
  )

  return (
    <NextImage
      alt={alt}
      className={cn(imageVariants({ className }))}
      height={0}
      sizes={sizes}
      style={styles}
      width={0}
      {...rest}
    />
  )
}

export const imageVariants = cva('', {
  variants: {
    ...baseVariants(['fullWidth']),
    autoHeight: {
      true: 'h-auto',
    },
  },
})
