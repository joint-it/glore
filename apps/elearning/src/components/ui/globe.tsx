'use client'

import { useCallback, useEffect, useMemo, useRef } from 'react'

import createGlobe, { type COBEOptions, type Marker } from 'cobe'
import { useSpring } from 'react-spring'

import { ColorScheme, useColorScheme } from '@/hooks/use-color-scheme'
import { cn, rgb } from '@/lib/utils'

export interface GlobeProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: COBEOptions
}

interface Colors extends Pick<COBEOptions, 'baseColor' | 'dark' | 'glowColor' | 'markerColor'> {}

// Add markers in some random locations on earth
const markers: Marker[] = [
  { location: [37.7595, -122.4367], size: 0.04 },
  { location: [40.7128, -74.006], size: 0.03 },
  { location: [51.5074, -0.1278], size: 0.05 },
  { location: [48.8566, 2.3522], size: 0.02 },
]

export const Globe = ({ className, config, ...props }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number>(null)
  const pointerInteractionMovement = useRef(0)

  const { colorScheme } = useColorScheme()

  const colors: Colors = useMemo(() => {
    if (colorScheme === ColorScheme.Dark) {
      return {
        baseColor: rgb(0, 0, 0),
        dark: 1,
        glowColor: rgb(0, 0, 0),
        markerColor: rgb(254, 199, 0),
      }
    }
    return {
      baseColor: rgb(20, 71, 230),
      dark: 0,
      glowColor: rgb(236, 238, 220),
      markerColor: rgb(2, 167, 61),
    }
  }, [colorScheme])

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
      diffuse: 1,
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
    <div className={cn('aspect-1 relative m-auto h-full w-full', className)} {...props}>
      <canvas
        className="h-full w-full cursor-grab transition-opacity"
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
