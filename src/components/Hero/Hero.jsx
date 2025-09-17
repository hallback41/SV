import styles from './_Hero.module.scss'
import myPhoto from '@/assets/images/hero/me.webp'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const sectionRef = useRef(null)

  // Скролл относительно всей секции
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Смещение текста по оси X на ширину 100% влево
  const xText = useTransform(scrollYProgress, [0, 1], ['0%', '-300%'])
  const xSkills = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <section ref={sectionRef} className={styles.heroWrapper}>
      <div className={styles.heroSticky}>
        <div className={`${styles.hero} container`}>
          <div className={styles.hero__grid}>
            <div className={`${styles.hero__photo} ${styles.hero__box}`}>
              <img src={myPhoto} alt="my photo" loading="lazy" />
            </div>

            <div className={styles.hero__yearBlock}>
              <div className={styles.hero__yearText}>1990s - 2000s</div>
            </div>

            <div className={`${styles.hero__textBlock} ${styles.hero__box}`}>
              <motion.div style={{ x: xText }} className={styles.hero__textSlides}>
                <div className={styles.hero__textSlide}>Что мне понравилось в те годы (A)</div>
                <div className={styles.hero__textSlide}>Что мне понравилось в те годы (B)</div>
                <div className={styles.hero__textSlide}>Что мне понравилось в те годы (C)</div>
                <div className={styles.hero__textSlide}>Что мне понравилось в те годы (D)</div>
              </motion.div>
            </div>

            <div className={`${styles.hero__skillsBlock} ${styles.hero__box}`}>
              <motion.div style={{ x: xSkills }} className={styles.hero__skillsSlides}>
                <div className={styles.hero__skillSlide}>Навыки (A)</div>
                <div className={styles.hero__skillSlide}>Навыки (B)</div>
              </motion.div>
            </div>

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
      </div>
    </section>
  )
}

export default Hero
