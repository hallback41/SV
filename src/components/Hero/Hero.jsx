import styles from './_Hero.module.scss'
import myPhoto from '@/assets/images/hero/me.webp'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SkillSlideItem from './SkillSlideItem'
import pc1990 from '@/assets/gifs/PC1990.gif'
import cd from '@/assets/gifs/cd.gif'
import bios from '@/assets/gifs/bios.gif'
import windows from '@/assets/gifs/windows.gif'
import internet from '@/assets/gifs/internet.gif'
import icq from '@/assets/images/hero/Logo_ICQ.svg'
import CS from '@/assets/images/hero/CS.webp'
import doom from '@/assets/gifs/doom.gif'
import diablo from '@/assets/gifs/diablo.gif'
import naruto from '@/assets/gifs/naruto.gif'
import l2 from '@/assets/images/hero/l2.png'
import mortal from '@/assets/gifs/mortal-combat.gif'
import mePlayingSega from '@/assets/images/hero/mePlayingSega.png'
import sega from '@/assets/images/hero/sega.png'
import tetris from '@/assets/images/hero/tetris.png'
import ps1 from '@/assets/images/hero/ps1.png'
import Marquee from '@/components/Marquee'

const Hero = () => {
  const slides = [
    [
      { img: pc1990, alt: 'pc1990', text: 'Увидел ПК на информатике' },
      { img: cd, alt: 'cd', text: 'Нарезал диски с музыкой' },
      { img: bios, alt: 'bios', text: 'Удалил Win32' },
      { img: windows, alt: 'windows', text: 'Установил Виндоус' },
      { img: internet, alt: 'internet', text: 'Вышел в интернет' },
      { img: icq, alt: 'icq', text: 'Сидел в аське' },
    ],
    [
      { img: CS, alt: 'CS', text: 'Горел в КС' },
      { img: doom, alt: 'doom', text: 'Часами сидел в DOOM' },
      { img: diablo, alt: 'diablo', text: 'Боялся играть в Diablo' },
      { img: naruto, alt: 'naruto', text: 'Смотрел Наруто' },
      { img: l2, alt: 'l2', text: 'Качал эльфийку в L2' },
      { img: mortal, alt: 'mortal', text: 'Учил комбухи в Мортале' },
    ],
  ]

  const sectionRef = useRef(null)

  // Скролл относительно всей секции
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const xText = useTransform(scrollYProgress, [0, 1], ['0%', '-304.6%'])
  const xSkills = useTransform(scrollYProgress, [0, 1], ['0%', '-105%'])

  return (
    <section ref={sectionRef} className={styles.heroWrapper}>
      <div className={styles.heroSticky}>
        <Marquee i18nKey="header.marquee" emojiCount={5} />

        <div className={`${styles.hero} container`}>
          <div className={styles.hero__grid}>
            <div className={`${styles.hero__photo} ${styles['hero__photo--Polaroid']}`}>
              <img src={myPhoto} alt="my photo" loading="lazy" />
              <p className={styles.caption}>Мех Владислав Игоревич</p>
            </div>

            <div className={styles.hero__yearBlock}>
              <h1 className={styles.hero__yearText}>1995s - 2005s</h1>
            </div>

            <div className={`${styles.hero__textBlock} ${styles.hero__box}`}>
              <motion.div style={{ x: xText }} className={styles.hero__textSlides}>
                <div className={styles.hero__textSlide}>
                  <h2 className={styles.hero__title}>Сокровища</h2>
                  <div className={styles.hero__textContent}>
                    <img
                      src={mePlayingSega}
                      alt="mePlayingSega"
                      loading="lazy"
                      className={styles.hero__image}
                    />
                    <p className={styles.hero__text}>
                      Это, наверное, <span>звучит странно</span>… <br />
                      Но самые тёплые воспоминания моего детства — не про походы в парк, не про игры
                      во дворе.
                      <br />
                      <img src={sega} alt="Sega" className={styles.hero__inlineImage} />
                      <br />
                      Они — про <span>звук загрузки старенького модема</span>. Про
                      <span>пиксели в Paint</span> и надписи <span>«онлайн» в “аське”</span>. Про
                      то, как я бережно держал в руках
                      <span>тамагочи</span>, будто это живое существо.
                      <br />
                      <img src={tetris} alt="Tetris" className={styles.hero__inlineImage} />
                      <br />У нас не было <span>дорогих игрушек</span> — но каждая кнопка на пульте,
                      каждый девайс, который появлялся в доме, был как
                      <span>сокровище</span>. Я мог часами <span>изучать</span> его, находить{' '}
                      <span>скрытые функции</span>, просто <span>чувствовать</span> его.
                      <br />
                      <img src={ps1} alt="PS1" className={styles.hero__inlineImage} />
                      <br />И с тех пор <span>ничего не изменилось</span>. Мне всё ещё важно{' '}
                      <span>понимать, как устроено</span> то, что я держу в руках. Всё ещё
                      <span>тянет исследовать</span>. Всё ещё <span>люблю технику</span> — может,
                      даже больше, чем тогда.
                      <br />
                      <br />
                      Просто теперь я <span>не просто нажимаю на кнопки</span> —{' '}
                      <span>я создаю их</span>.
                    </p>
                  </div>
                </div>
                <div className={styles.hero__textSlide}>
                  <h2 className={styles.hero__title}>Сокровища</h2>
                  <div className={styles.hero__textContent}>
                    <img
                      src={mePlayingSega}
                      alt="mePlayingSega"
                      loading="lazy"
                      className={styles.hero__image}
                    />
                    <p className={styles.hero__text}>
                      Это, наверное, <span>звучит странно</span>… <br />
                      Но самые тёплые воспоминания моего детства — не про походы в парк, не про игры
                      во дворе.
                      <br />
                      <img src={sega} alt="Sega" className={styles.hero__inlineImage} />
                      <br />
                      Они — про <span>звук загрузки старенького модема</span>. Про
                      <span>пиксели в Paint</span> и надписи <span>«онлайн» в “аське”</span>. Про
                      то, как я бережно держал в руках
                      <span>тамагочи</span>, будто это живое существо.
                      <br />
                      <img src={tetris} alt="Tetris" className={styles.hero__inlineImage} />
                      <br />У нас не было <span>дорогих игрушек</span> — но каждая кнопка на пульте,
                      каждый девайс, который появлялся в доме, был как
                      <span>сокровище</span>. Я мог часами <span>изучать</span> его, находить{' '}
                      <span>скрытые функции</span>, просто <span>чувствовать</span> его.
                      <br />
                      <img src={ps1} alt="PS1" className={styles.hero__inlineImage} />
                      <br />И с тех пор <span>ничего не изменилось</span>. Мне всё ещё важно{' '}
                      <span>понимать, как устроено</span> то, что я держу в руках. Всё ещё
                      <span>тянет исследовать</span>. Всё ещё <span>люблю технику</span> — может,
                      даже больше, чем тогда.
                      <br />
                      <br />
                      Просто теперь я <span>не просто нажимаю на кнопки</span> —{' '}
                      <span>я создаю их</span>.
                    </p>
                  </div>
                </div>
                <div className={styles.hero__textSlide}>
                  <h2 className={styles.hero__title}>Сокровища</h2>
                  <div className={styles.hero__textContent}>
                    <img
                      src={mePlayingSega}
                      alt="mePlayingSega"
                      loading="lazy"
                      className={styles.hero__image}
                    />
                    <p className={styles.hero__text}>
                      Это, наверное, <span>звучит странно</span>… <br />
                      Но самые тёплые воспоминания моего детства — не про походы в парк, не про игры
                      во дворе.
                      <br />
                      <img src={sega} alt="Sega" className={styles.hero__inlineImage} />
                      <br />
                      Они — про <span>звук загрузки старенького модема</span>. Про
                      <span>пиксели в Paint</span> и надписи <span>«онлайн» в “аське”</span>. Про
                      то, как я бережно держал в руках
                      <span>тамагочи</span>, будто это живое существо.
                      <br />
                      <img src={tetris} alt="Tetris" className={styles.hero__inlineImage} />
                      <br />У нас не было <span>дорогих игрушек</span> — но каждая кнопка на пульте,
                      каждый девайс, который появлялся в доме, был как
                      <span>сокровище</span>. Я мог часами <span>изучать</span> его, находить{' '}
                      <span>скрытые функции</span>, просто <span>чувствовать</span> его.
                      <br />
                      <img src={ps1} alt="PS1" className={styles.hero__inlineImage} />
                      <br />И с тех пор <span>ничего не изменилось</span>. Мне всё ещё важно{' '}
                      <span>понимать, как устроено</span> то, что я держу в руках. Всё ещё
                      <span>тянет исследовать</span>. Всё ещё <span>люблю технику</span> — может,
                      даже больше, чем тогда.
                      <br />
                      <br />
                      Просто теперь я <span>не просто нажимаю на кнопки</span> —{' '}
                      <span>я создаю их</span>.
                    </p>
                  </div>
                </div>
                <div className={styles.hero__textSlide}>
                  <h2 className={styles.hero__title}>Сокровища</h2>
                  <div className={styles.hero__textContent}>
                    <img
                      src={mePlayingSega}
                      alt="mePlayingSega"
                      loading="lazy"
                      className={styles.hero__image}
                    />
                    <p className={styles.hero__text}>
                      Это, наверное, <span>звучит странно</span>… <br />
                      Но самые тёплые воспоминания моего детства — не про походы в парк, не про игры
                      во дворе.
                      <br />
                      <img src={sega} alt="Sega" className={styles.hero__inlineImage} />
                      <br />
                      Они — про <span>звук загрузки старенького модема</span>. Про
                      <span>пиксели в Paint</span> и надписи <span>«онлайн» в “аське”</span>. Про
                      то, как я бережно держал в руках
                      <span>тамагочи</span>, будто это живое существо.
                      <br />
                      <img src={tetris} alt="Tetris" className={styles.hero__inlineImage} />
                      <br />У нас не было <span>дорогих игрушек</span> — но каждая кнопка на пульте,
                      каждый девайс, который появлялся в доме, был как
                      <span>сокровище</span>. Я мог часами <span>изучать</span> его, находить{' '}
                      <span>скрытые функции</span>, просто <span>чувствовать</span> его.
                      <br />
                      <img src={ps1} alt="PS1" className={styles.hero__inlineImage} />
                      <br />И с тех пор <span>ничего не изменилось</span>. Мне всё ещё важно{' '}
                      <span>понимать, как устроено</span> то, что я держу в руках. Всё ещё
                      <span>тянет исследовать</span>. Всё ещё <span>люблю технику</span> — может,
                      даже больше, чем тогда.
                      <br />
                      <br />
                      Просто теперь я <span>не просто нажимаю на кнопки</span> —{' '}
                      <span>я создаю их</span>.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className={`${styles.hero__skillsBlock} `}>
              <motion.div style={{ x: xSkills }} className={styles.hero__skillsSlides}>
                {slides.map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={`${styles.hero__skillSlide} ${styles.hero__box}`}
                  >
                    {group.map((item, index) => (
                      <SkillSlideItem
                        key={index}
                        img={item.img}
                        alt={item.alt}
                        text={item.text}
                        isAlt={index % 2 !== 0}
                      />
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div
              className={`${styles.hero__pop} ${styles.hero__box} ${styles['hero__pop--1']}`}
            ></div>
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

export default Hero
