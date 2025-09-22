import { useEffect } from 'react'
import Webamp from 'webamp'
import { skinUrl, playlist } from './webamp.skin'

export default function WebampPlayer() {
  useEffect(() => {
    const webamp = new Webamp({
      initialTracks: playlist,
      initialSkin: {
        url: skinUrl,
      },
    })

    if (Webamp.browserIsSupported()) {
      webamp.renderWhenReady(document.getElementById('winamp-container'))
    }
  }, [])

  return <div id="winamp-container" style={{ zIndex: 9999 }}></div>
}
