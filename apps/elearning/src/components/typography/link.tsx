/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { useMemo } from 'react'

import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react'

const nextLinkPropsList: (keyof NextLinkProps)[] = [
  'as',
  'href',
  'legacyBehavior',
  'locale',
  'onClick',
  'onMouseEnter',
  'onTouchStart',
  'passHref',
  'prefetch',
  'replace',
  'scroll',
  'shallow',
]

export interface LinkProps extends NextLinkProps, Omit<ChakraLinkProps, (typeof nextLinkPropsList)[number]> {}

export const Link = (props: LinkProps) => {
  const { children, href, ...rest } = props

  const [nextProps, chakraProps] = useMemo(
    () =>
      Object.keys(rest).reduce<[Partial<NextLinkProps>, Partial<ChakraLinkProps>]>(
        (allProps, key) => {
          if (nextLinkPropsList.includes(key as keyof NextLinkProps)) {
            return [{ ...allProps[0], [key]: rest[key as keyof typeof rest] }, allProps[1]]
          }
          return [allProps[0], { ...allProps[1], [key]: rest[key as keyof typeof rest] }]
        },
        [{}, {}],
      ),
    [rest],
  )

  return (
    <ChakraLink asChild {...chakraProps}>
      <NextLink href={href} {...nextProps}>
        {children}
      </NextLink>
    </ChakraLink>
  )
}
