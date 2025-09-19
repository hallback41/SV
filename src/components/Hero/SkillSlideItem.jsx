import styles from './_SkillSlideItem.module.scss'
import React from 'react'

const SkillSlideItem = ({ img, alt, text, isAlt }) => {
  return (
    <div
      className={`${styles.hero__skillSlideInner} ${isAlt ? styles.hero__skillSlideInner_alt : ''}`}
    >
      <img src={img} alt={alt} loading="lazy" width={60} />
      <p>{text}</p>
    </div>
  )
}

export default SkillSlideItem
