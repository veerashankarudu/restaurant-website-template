import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Gallery from './components/Gallery/Gallery'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsApp/WhatsAppFloat'
import { RestaurantProvider } from './context/RestaurantContext'

function App() {
  return (
    <RestaurantProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Menu />
                <Gallery />
                <Reviews />
                <Contact />
              </>
            } />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </RestaurantProvider>
  )
}

export default App