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
import RestaurantAdmin from './components/Admin/RestaurantAdmin'
import ResetPassword from './components/Admin/ResetPassword'
import { RestaurantProvider } from './context/RestaurantContext'

function App() {
  return (
    <RestaurantProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<RestaurantAdmin />} />
            <Route path="/admin/reset-password" element={<ResetPassword />} />
            
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Menu />
                <Gallery />
                <Reviews />
                <Contact />
                <Footer />
                <WhatsAppFloat />
              </>
            } />
            <Route path="/menu" element={
              <>
                <Header />
                <Menu />
                <Footer />
                <WhatsAppFloat />
              </>
            } />
            <Route path="/gallery" element={
              <>
                <Header />
                <Gallery />
                <Footer />
                <WhatsAppFloat />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <Contact />
                <Footer />
                <WhatsAppFloat />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </RestaurantProvider>
  )
}

export default App