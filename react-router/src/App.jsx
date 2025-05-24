import { Link, NavLink, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import MainHeader from "./components/MainHeader"

function App() {

  return (
    <div className="w-full text-center">

      <nav className="w-full flex justify-center bg-pink-600 p-2 mb-5">
        <ul className="flex space-x-4 text-white font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* Default route using index */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
