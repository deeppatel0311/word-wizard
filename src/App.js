import React from 'react'
import TextFrom from './component/TextFrom';
import About from './component/About';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <main style={{flexGrow: 1}}>
          <Routes>
            <Route path="/" element={<TextFrom />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
