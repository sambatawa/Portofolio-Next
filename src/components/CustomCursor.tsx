'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower || typeof window === 'undefined') return
    
    const moveCursor = (clientX: number, clientY: number) => {
      gsap.to(cursor, {
        x: clientX - 10,
        y: clientY - 10,
        duration: 0.2,
        ease: 'power2.out',
      })
      gsap.to(follower, {
        x: clientX - 20,
        y: clientY - 20,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e.clientX, e.clientY)
    }
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        moveCursor(touch.clientX, touch.clientY)
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouchMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])
  
  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      ></div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9999]"
      ></div>
    </>
  )
}

export default CustomCursor
