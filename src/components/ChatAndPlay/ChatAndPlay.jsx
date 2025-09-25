// ChatAndPlay.jsx
import styles from './_ChatAndPlay.module.scss'
import ICQ from './ICQWidget/ICQWidget'
import WebampPlayer from './WebampPlayer'

export default function ChatAndPlay() {
  return (
    <section className={`${styles.ChatAndPlay} container`}>
      <div className={styles.ChatAndPlay__wrapper}>
        <aside className={styles.ChatAndPlay__ICQwrapper}>
          <ICQ />
        </aside>
        <aside className={styles.ChatAndPlay__Webampwrapper}>
          <div id="winamp-host" className={styles.winampHost} />
          <WebampPlayer hostId="winamp-host" />
        </aside>
      </div>
    </section>
  )
}
