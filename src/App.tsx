import React, { lazy, Suspense } from "react"
import { Footer, Header, Loader } from "./components"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))
const Movies = lazy(() => import("./pages/Movies"))
const TV = lazy(() => import("./pages/TV"))
const Error = lazy(() => import("./pages/Error"))

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
