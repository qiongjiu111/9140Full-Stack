import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App