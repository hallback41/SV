import { Trans } from 'react-i18next'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles['header__marquee-wrapper']}>
        <div className={styles['header__marquee']}>
          <Trans
            i18nKey="header.marquee"
            components={[
              <span className={styles['header__emoji']} />,
              <span className={styles['header__emoji']} />,
              <span className={styles['header__emoji']} />,
              <span className={styles['header__emoji']} />,
              <span className={styles['header__emoji']} />,
            ]}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
