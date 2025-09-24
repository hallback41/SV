import styles from './_Hero.module.scss'
import myPhoto from '@/assets/images/hero/me.webp'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import Marquee from '@/components/Marquee'
import HeroTextSlides from './Slides/HeroTextSlides'
import HeroSkillsSlides from './Slides/HeroSkillsSlides'
import { skillSlides } from './heroSlidesData'

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const xText = useTransform(scrollYProgress, [0, 1], ['0%', '-304.6%'])
  const xSkills = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <section ref={sectionRef} className={styles.heroWrapper}>
      <div className={styles.heroSticky}>
        <Marquee i18nKey="header.marquee" emojiCount={5} />
        <div className={`${styles.hero} container`}>
          <div className={styles.hero__grid}>
            {/* Фото */}
            <div className={`${styles.hero__photo} ${styles['hero__photo--Polaroid']}`}>
              <img src={myPhoto} alt="Моё детское фото" loading="lazy" width={240} height={300} />
              <p className={styles.caption}>Мех Владислав Игоревич</p>
            </div>

            {/* Годы */}
            <div className={styles.hero__yearBlock}>
              <h1 className={styles.hero__yearText}>1993–2007</h1>
            </div>

            {/* Тексты */}
            <HeroTextSlides isMobile={isMobile} x={xText} />

            {/* Скилы */}
            <HeroSkillsSlides isMobile={isMobile} x={xSkills} slides={skillSlides} />

            {/* Поп-культура */}
            <div className={`${styles.hero__pop} ${styles.hero__box} ${styles['hero__pop--1']}`}>
              Поп-культура
            </div>
            <div className={`${styles.hero__pop} ${styles.hero__box} ${styles['hero__pop--2']}`}>
              Поп-культура
            </div>
            <div className={`${styles.hero__pop} ${styles.hero__box} ${styles['hero__pop--3']}`}>
              Поп-культура
            </div>
            <div className={`${styles.hero__pop} ${styles.hero__box} ${styles['hero__pop--4']}`}>
              Поп-культура
            </div>
          </div>
        </div>
        <Marquee i18nKey="footer.marquee" emojiCount={3} />
      </div>
    </section>
  )
}
