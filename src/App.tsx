import { Navigation } from './components/ui/navigation'
import { Hero } from './components/ui/hero'
import { Footer } from './components/ui/footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App