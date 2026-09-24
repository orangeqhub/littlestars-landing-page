import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SocialFloat from './components/SocialFloat.jsx'
import useParallax from './lib/useParallax.js'
import { ROUTES, usePath } from './lib/router.js'

export default function App() {
  const path = usePath()

  useParallax([path])

  return (
    <div className="site">
      <Navbar path={path} />
      <main>
        {path === ROUTES.ABOUT ? (
          <About />
        ) : path === ROUTES.CONTACT ? (
          <Contact />
        ) : (
          <Home />
        )}
      </main>
      <SocialFloat />
      <Footer />
    </div>
  )
}