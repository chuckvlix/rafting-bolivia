import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Destinations from "./components/Destinations"
import Testimonials from "./components/Testimonials"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('/data/content.json')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error cargando los datos', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
    </div>
    )
  }
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <main>
        <Hero />
        <Features items={data.features} />
        <Destinations items={data.destinations} />
        <Testimonials items={data.testimonials} />
        <FinalCTA />
        <Footer company={data} />
      </main>
    </div>
  )
}

export default App
