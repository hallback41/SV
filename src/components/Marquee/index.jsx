import { Trans } from 'react-i18next'
import styles from './_Marquee.module.scss'

const Marquee = ({ i18nKey, emojiCount = 5 }) => {
  return (
    <div className={`${styles.wrapper} container `}>
      <div className={styles['marquee-wrapper']}>
        <div className={styles.marquee}>
          <Trans
            i18nKey={i18nKey}
            components={Array.from({ length: emojiCount }, (_, i) => (
              <span key={i} className={styles.emoji} />
            ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Marquee
