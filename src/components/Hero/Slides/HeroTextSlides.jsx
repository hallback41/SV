import HorizontalScroller from '@/components/Hero/HorizontalScroller'
import styles from '../_Hero.module.scss'
import { textSlides } from '../heroSlidesData'

export default function HeroTextSlides({ isMobile, x }) {
  return (
    <div className={`${styles.hero__textBlock} ${styles.hero__box}`}>
      <HorizontalScroller isMobile={isMobile} x={x} className={styles.hero__textSlides}>
        {textSlides.map((slide, index) => (
          <div className={styles.hero__textSlide} key={`text-${index}`}>
            <h2 className={styles.hero__title}>{slide.title}</h2>
            <div className={styles.hero__textContent}>
              <img
                src={slide.image}
                alt={slide.alt}
                loading="lazy"
                decoding="async"
                className={styles.hero__image}
              />
              <p className={styles.hero__text}>{slide.text}</p>
            </div>
          </div>
        ))}
      </HorizontalScroller>
    </div>
  )
}
