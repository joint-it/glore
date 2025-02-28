'use client'

import { useCallback, useEffect, useMemo, useRef } from 'react'

import createGlobe, { type COBEOptions, type Marker } from 'cobe'
import { useSpring } from 'react-spring'

import { useTheme } from '@/hooks/use-theme'
import { Theme } from '@/theme/enums'
import type { VariantProps } from '@/theme/types'
import { cn, cva, rgb } from '@/theme/utils'
import cities from 'config/cities.json'

interface GlobeColors extends Pick<COBEOptions, 'baseColor' | 'dark' | 'glowColor' | 'markerColor'> {}

interface GlobeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof globe> {
  config?: COBEOptions
}

const markers: Marker[] = cities.map(({ location, population }) => ({
  location: location as [number, number],
  size: population / 500,
}))

const Globe = (props: GlobeProps) => {
  const { className, config, transition, ...rest } = props

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number>(null)
  const pointerInteractionMovement = useRef(0)

  const { theme } = useTheme()
  const styles = useMemo(() => globe({ transition }), [transition])

  const colors: GlobeColors = useMemo(() => {
    if (theme === Theme.Dark) {
      return {
        baseColor: rgb(25, 60, 184),
        dark: 0,
        glowColor: rgb(30, 41, 56),
        markerColor: rgb(255, 215, 104),
      }
    }
    return {
      baseColor: rgb(20, 71, 230),
      dark: 0,
      glowColor: rgb(236, 238, 220),
      markerColor: rgb(2, 167, 61),
    }
  }, [theme])

  const [{ r }, api] = useSpring(() => ({
    config: {
      friction: 40,
      mass: 1,
      precision: 0.001,
      tension: 280,
    },
    r: 0,
  }))

  useEffect(() => {
    if (!canvasRef.current) return

    let phi = 0
    let width = 0

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      diffuse: 0,
      height: width * 2,
      mapBaseBrightness: 0,
      mapBrightness: 6,
      mapSamples: 14000,
      markers,
      onRender: state => {
        if (!pointerInteracting.current) {
          phi += 0.005
        }
        state.phi = phi + r.get()
        state.width = width * 2
        state.height = width * 2
      },
      opacity: 1,
      phi: 0,
      scale: 0.5,
      theta: 0.4,
      width: width * 2,
      ...colors,
      ...config,
    })

    setTimeout(() => {
      if (!canvasRef.current) return
      canvasRef.current.style.opacity = '1'
    })

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [config, colors, r])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!pointerInteracting.current) return
      const delta = e.clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      void api.start({ r: delta / 200 })
    },
    [api],
  )

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current
    if (!canvasRef.current) return
    canvasRef.current.style.cursor = 'grabbing'
  }, [])

  const onPointerOut = useCallback(() => {
    pointerInteracting.current = null
    if (!canvasRef.current) return
    canvasRef.current.style.cursor = 'grab'
  }, [])

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!pointerInteracting.current) return
      const delta = e.touches[0].clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      void api.start({ r: delta / 100 })
    },
    [api],
  )

  return (
    <div className="relative m-auto h-full w-full" {...rest}>
      <canvas
        className={cn(styles, className)}
        onMouseMove={onMouseMove}
        onPointerDown={onPointerDown}
        onPointerOut={onPointerOut}
        onPointerUp={onPointerOut}
        onTouchMove={onTouchMove}
        ref={canvasRef}
        style={{
          contain: 'layout paint size',
          opacity: 0,
        }}
      />
    </div>
  )
}

const globe = cva('h-full w-full cursor-grab', {
  variants: {
    transition: {
      true: 'transition-opacity',
    },
  },
  defaultVariants: {
    transition: true,
  },
})

export { Globe, type GlobeProps }
