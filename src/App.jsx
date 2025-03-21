import { Routes, Route } from "react-router-dom";
import React from 'react'

import { Container } from "./Components/Container/Container"
import { Footer } from "./Components/Layouts/Footer/Footer"
import { Header } from "./Components/Layouts/Header/Header"
import { Home } from "./Components/Pages/Home/Home"
import { Skills } from "./Components/Pages/Skills/Skills"
import { Experience} from "./Components/Pages/Experience/Experience"
import { Projects} from "./Components/Pages/Projects/Projects"
import { Contact} from "./Components/Pages/Contact/Contact"

export const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <Routes>
          {/* Se ponen las paginas y se importan */}
          <Route path = "/" element ={<Home />}/>
          <Route path = "Skills" element ={<Skills/>}/>
          <Route path = "Experience" element ={<Experience />}/>
          <Route path = "Projects" element ={<Projects />}/>
          <Route path = "Contact" element ={<Contact />}/>

        </Routes>
      </Container>
      <Footer/>
    </>
  )
}

