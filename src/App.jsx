import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Accueil from "./pages/accueil"
import Contacts from "./pages/contact"
import About from "./pages/about"
import Catalogue from "./pages/catalogue"



function App() {


  return (
    <>
      < Navbar />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/catalogue" element={< Catalogue/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={< Contacts/>} />

    </Routes>
    </>
  )
}

export default App
