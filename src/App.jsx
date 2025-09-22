import ThemeProvider from './providers/ThemeProvider'
import Hero from './components/Hero/Hero'
import ICQWidget from './components/ICQWidget/ICQWidget'

function App() {
  return (
    <ThemeProvider theme="90s">
      <Hero />
      <ICQWidget />
    </ThemeProvider>
  )
}

export default App
