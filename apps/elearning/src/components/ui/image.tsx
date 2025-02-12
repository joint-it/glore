'use client'

import { type ImageLoader } from 'next/dist/client/image-component'
import { type OnLoadingComplete, type PlaceholderValue, type StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import { useMemo } from 'react'

import { displayName } from '@/lib/utils'

interface ImageProps
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
  const { alt = '', height, sizes = '100vw', style, width, ...rest } = props

  const styles = useMemo(
    () => ({
      width: width ? (typeof width === 'string' ? width : `${width}px`) : 'auto',
      height: height ? (typeof height === 'string' ? height : `${height}px`) : 'auto',
      ...style,
    }),
    [height, style, width],
  )

  return <NextImage alt={alt} height={0} sizes={sizes} style={styles} width={0} {...rest} />
}
Image.displayName = displayName('Image')

export { Image, type ImageProps }
