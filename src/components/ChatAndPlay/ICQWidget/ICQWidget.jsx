import React from 'react'
import s from './_ICQWidget.module.scss'

const Contact = ({ status = 'na', name, addons = [] }) => (
  <li className={s.contact}>
    <i className={`${s.icon} ${s[`icon--${status}`]}`} />
    <a href="#" className={s.contact__name}>
      {name}
    </a>
    <div className={s.contact__addons}>
      {addons.map((k, i) => (
        <i key={i} className={`${s.addon} ${s[`addon--${k}`]}`} />
      ))}
    </div>
  </li>
)

export default function ICQ2001b() {
  return (
    <div className={s.icq2001b}>
      {/* Title bar (как у Win98) */}
      <div className={s.titlebar}>
        <i className={s.titlebar__appicon} />
        <span className={s.titlebar__title}>ICQ</span>
        <div className={s.titlebar__controls}>
          <button aria-label="minimize" className={`${s.wbtn} ${s['wbtn--min']}`} />
          <button aria-label="maximize" className={`${s.wbtn} ${s['wbtn--max']}`} />
          <button aria-label="close" className={`${s.wbtn} ${s['wbtn--close']}`} />
        </div>
      </div>

      {/* Верхний промо-блок и версия */}
      <div className={s.header}>
        <div className={s.promo}>
          <i className={s.promo__logo} />
          <div className={s.promo__text}>
            What's New
            <br />
            In 2001b?
          </div>
        </div>
        <a className={s.version} href="#">
          ICQ 2001b
        </a>
      </div>

      {/* Корпус окна: список + боковая панель */}
      <div className={s.body}>
        <div className={s.listWrap}>
          <div className={s.listHead}>
            <div className={s.listHead__label}>Online</div>
            <div className={s.listHead__line} />
            <button className={s.listHead__btn} aria-label="scroll up" />
          </div>

          <div className={s.contactsArea}>
            <ul className={s.contacts}>
              <Contact status="na" name="John" />
              <Contact status="na" name="Emily" addons={['phone']} />
              <Contact status="flower" name="Yamada" />
              <Contact status="flower" name="Chan" addons={['phone', 'on']} />
              <Contact status="flower" name="Patricia" />
              <Contact status="na" name="Val" addons={['phone', 'on']} />
              <Contact status="file" name="Elizabeth" />
            </ul>

            {/* Фальш-скроллбар как на скрине */}
            <div className={s.scrollbar}>
              <button className={`${s.scrollbar__btn} ${s['scrollbar__btn--up']}`} />
              <div className={s.scrollbar__track}>
                <div className={s.scrollbar__thumb} />
              </div>
              <button className={`${s.scrollbar__btn} ${s['scrollbar__btn--down']}`} />
            </div>
          </div>

          {/* Кнопочные блоки */}
          <button className={`${s.btn} ${s['btn--wide']}`}>How to Start</button>
          <button className={`${s.btn} ${s['btn--wide']}`}>Add Features</button>

          <div className={s.btnRow}>
            <button className={`${s.btn} ${s['btn--wide']}`}>Chat With A Friend</button>
            <button className={`${s.btn} ${s['btn--square']}`} aria-label="dropdown" />
            <button className={`${s.btn} ${s['btn--square']}`} aria-label="play" />
          </div>

          <div className={s.notice}>
            <i className={`${s.icon} ${s['icon--flower-gray']}`} />
            <span>System Notice</span>
          </div>

          <button className={`${s.btn} ${s['btn--xl']}`}>Add/Invite Users</button>

          <div className={s.bottomBtns}>
            <button className={s.btn}>Services</button>
            <button className={s.btn}>My ICQ</button>
          </div>

          <div className={s.statusbar}>
            <div className={s.statusbar__left}>
              <strong>Main</strong>
              <i className={`${s.iconSmall} ${s['iconSmall--flower']}`} />
              <span>Online</span>
            </div>
            <div className={s.statusbar__right}>
              <input className={s.input} placeholder="Enter word to translate" />
              <button className={s.go}>GO!</button>
            </div>
          </div>
        </div>

        {/* Боковая панель с вертикальным логотипом и иконками */}
        <aside className={s.sidebar}>
          <div className={s.sidebar__label}>ICQuick</div>
          <button className={`${s.sicon} ${s['sicon--user']}`} />
          <button className={`${s.sicon} ${s['sicon--heart']}`} />
          <button className={`${s.sicon} ${s['sicon--dove']}`} />
          <button className={`${s.sicon} ${s['sicon--disk']}`} />
          <button className={`${s.sicon} ${s['sicon--netscape']}`} />
        </aside>
      </div>
    </div>
  )
}
