import Hero from './components/Hero'
import Impact from './components/Impact'
import Stories from './components/Stories'
import Donate from './components/Donate'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Shelter for Children
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#impact" className="hover:text-gray-900">Impact</a>
            <a href="#donate" className="hover:text-gray-900">Donate</a>
          </nav>
          <a
            href="#donate"
            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700"
          >
            Donate
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Impact />
        <Stories />
        <Donate />
      </main>

      <Footer />
    </div>
  )
}

export default App
