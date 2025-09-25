// WebampPlayer.jsx
import { useEffect, useRef } from 'react'
import Webamp from 'webamp'
import { skinUrl, playlist } from './webamp.skin'

export default function WebampPlayer({ hostId }) {
  const webampRef = useRef(null)

  useEffect(() => {
    if (webampRef.current) return
    const host = document.getElementById(hostId)
    if (!host) return

    const webamp = new Webamp({
      initialTracks: playlist,
      initialSkin: { url: skinUrl },
      options: {
        availableWindows: ['main'], // только главное окно
        initialWindowLayout: {
          main: { position: { x: 0, y: 0 }, open: true }, // ← старт в (0,0)
        },
      },
    })
    webampRef.current = webamp

    if (Webamp.browserIsSupported()) {
      webamp.renderWhenReady(host).then(() => {
        // На некоторых скинах/сборках библиотека всё равно даёт лёгкий оффсет.
        // Прибьём координаты напрямую на главном окне:
        const main =
          host.querySelector('[data-window-id="main"]') || host.querySelector('.webamp-window')
        if (main) {
          main.style.left = '0px'
          main.style.top = '0px'
        }

        // (опционально) запрет закрытия, как раньше:
        const off = webamp.onWillClose((cancel) => cancel())
        webampRef.current._cleanup = () => off?.()
      })
    }

    return () => {
      try {
        webampRef.current?._cleanup?.()
        webampRef.current?.dispose?.()
      } finally {
        webampRef.current = null
      }
    }
  }, [hostId])

  return null
}
