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

export const skillSlides = [
  [
    { img: pc1990, alt: 'Первый ПК на информатике', text: 'Увидел ПК на информатике' },
    { img: cd, alt: 'Компакт-диск', text: 'Нарезал диски с музыкой' },
    { img: bios, alt: 'Экран BIOS', text: 'Удалил Win32' },
    { img: windows, alt: 'Windows загрузка', text: 'Установил Виндоус' },
    { img: internet, alt: 'Иконка интернета', text: 'Вышел в интернет' },
    { img: icq, alt: 'Логотип ICQ', text: 'Сидел в аське' },
  ],
  [
    { img: CS, alt: 'Counter-Strike', text: 'Горел в КС' },
    { img: doom, alt: 'Doom', text: 'Часами сидел в DOOM' },
    { img: diablo, alt: 'Diablo', text: 'Боялся играть в Diablo' },
    { img: naruto, alt: 'Naruto', text: 'Смотрел Наруто' },
    { img: l2, alt: 'Lineage 2', text: 'Качал эльфийку в L2' },
    { img: mortal, alt: 'Mortal Kombat', text: 'Учил комбухи в Мортале' },
  ],
]

import mePlayingSega from '@/assets/images/hero/mePlayingSega.png'
import sega from '@/assets/images/hero/sega.png'
import tetris from '@/assets/images/hero/tetris.png'
import ps1 from '@/assets/images/hero/ps1.png'
import styles from '../Hero/_Hero.module.scss'

export const textSlides = [
  {
    title: 'Сокровища',
    image: mePlayingSega,
    alt: 'Фото — играю в Sega',
    text: (
      <>
        Это, наверное, <span>звучит странно</span>… <br />
        Но самые тёплые воспоминания моего детства — не про походы в парк или игры во дворе. <br />
        Они — про звук загрузки старенького модема, про пиксели в Paint и надписи «онлайн» в
        “аське”.
        <br />
        <img src={sega} alt="Sega" className={styles.hero__inlineImage} />
        Каждая кнопка на пульте, каждый девайс казались <span>сокровищем</span>.
      </>
    ),
  },
  {
    title: 'Другие воспоминания',
    image: sega,
    alt: 'Sega',
    text: (
      <>
        Помню, как впервые запустил <span>Sonic</span> на своей Sega.
        <br />
        <img src={tetris} alt="Tetris" className={styles.hero__inlineImage} />
        Иногда даже мама приходила посмотреть, как ёж пробегает уровни — и мы смеялись вместе.
      </>
    ),
  },
  {
    title: 'Третий слайд',
    image: ps1,
    alt: 'PlayStation 1',
    text: (
      <>
        <img src={ps1} alt="PS1" className={styles.hero__inlineImage} />
        PlayStation стала для меня настоящим откровением. Crash Bandicoot, Tekken и сотни других игр
        учили терпению и азарту. Я понял, что игры могут быть <span>глубокими</span>.
      </>
    ),
  },
  {
    title: 'Четвёртый слайд',
    image: tetris,
    alt: 'Tetris',
    text: (
      <>
        А ещё <span>тетрис</span> в автобусе — вечная классика!
        <br />
        <img src={mePlayingSega} alt="Фото с Sega" className={styles.hero__inlineImage} />
        Никаких сохранений, никаких чекпоинтов — только ты и падающие блоки.
      </>
    ),
  },
]
