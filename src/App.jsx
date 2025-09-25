import ThemeProvider from './providers/ThemeProvider'
import Hero from './components/Hero/Hero'
import ChatAndPlay from './components/ChatAndPlay/ChatAndPlay'

function App() {
  return (
    <ThemeProvider theme="90s">
      <Hero />
      <ChatAndPlay />
    </ThemeProvider>
  )
}

export default App
