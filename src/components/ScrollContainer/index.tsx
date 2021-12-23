import { useContext, useEffect, useRef, ReactNode } from 'react'
import { ScrollContext } from '../../context/Scroll'

interface IScrollContainerProps {
  children: ReactNode
}

const ScrollContainer = ({ children }: IScrollContainerProps) => {
  const { scroll } = useContext(ScrollContext)
  const scrollPosition = useRef({ x: 0, y: 0 })

  const updateScroll = () => {
    scrollPosition.current.x = document.body.scrollLeft
    scrollPosition.current.y = document.body.scrollTop
  }

  useEffect(() => {
    document.body.scrollTo(scrollPosition.current.x, scrollPosition.current.y)

    document.body.classList.toggle('locked', scroll.locked)
  }, [scroll.locked])

  useEffect(() => {
    document.body.addEventListener('scroll', updateScroll)

    return () => document.body.removeEventListener('scroll', updateScroll)
  }, [])

  return <>{children}</>
}

export default ScrollContainer
