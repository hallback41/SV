import ThemeProvider from './providers/ThemeProvider'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <ThemeProvider theme="90s">
      <Header />
      <Hero />
    </ThemeProvider>
  )
}

export default App
