import React from "react"
import { Footer, Header } from "./components"
import { Route, Routes } from "react-router-dom"
import { Error, Home, Movies, TV } from "./pages"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
