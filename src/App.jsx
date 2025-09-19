import ThemeProvider from './providers/ThemeProvider'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <ThemeProvider theme="90s">
      <Hero />
    </ThemeProvider>
  )
}

export default App
