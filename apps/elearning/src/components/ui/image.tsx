import NextImage from 'next/image'

type NextImageProps = typeof NextImage

export interface ImageProps extends NextImageProps {}

export const Image = NextImage
