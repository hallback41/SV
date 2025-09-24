import { motion as Motion } from 'framer-motion'

export default function HorizontalScroller({ isMobile, x, className, children }) {
  if (isMobile) {
    return (
      <div className={className} role="group" aria-roledescription="carousel">
        {children}
      </div>
    )
  }

  return (
    <Motion.div style={{ x }} className={className}>
      {children}
    </Motion.div>
  )
}
