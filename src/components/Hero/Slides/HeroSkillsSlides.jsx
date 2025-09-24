import HorizontalScroller from '@/components/Hero/HorizontalScroller'
import styles from '../_Hero.module.scss'
import SkillSlideItem from '../SkillSlideItem'

export default function HeroSkillsSlides({ isMobile, x, slides }) {
  return (
    <div className={styles.hero__skillsBlock}>
      <HorizontalScroller isMobile={isMobile} x={x} className={styles.hero__skillsSlides}>
        {slides.map((group, groupIndex) => (
          <div
            key={`group-${groupIndex}`}
            className={`${styles.hero__skillSlide} ${styles.hero__box}`}
          >
            {group.map((item, index) => (
              <SkillSlideItem
                key={`${groupIndex}-${index}-${item.alt}`}
                img={item.img}
                alt={item.alt}
                text={item.text}
                isAlt={index % 2 !== 0}
              />
            ))}
          </div>
        ))}
      </HorizontalScroller>
    </div>
  )
}
