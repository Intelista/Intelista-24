import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from'../src/pages/Home';
import Event from './components/Event';
import About from './pages/About';
import Tech from './components/Tech';
import NonTech from './components/NonTech';
import VantaBackground from './components/VantaBackground';
import CardTech from './components/CardTech';
import CardNonTech from './components/CardNonTech';

function App() {
    return (
        <Router>
            <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
                <Navbar />
                {/* Vanta Background based on route */}
                <Routes>
                    
                    <Route exact path="/" element={<><VantaBackground effect="birds" /><Home/></>} />
                    <Route path="/event" element={ <Event />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tech" element={<><VantaBackground effect="net" /><Tech /></>} />
                    <Route path="/nontech" element={<><VantaBackground effect="net" /><NonTech /></>} />
                    <Route path="/cardtech" element={<><VantaBackground effect="waves" /><CardTech /></>} />
                    <Route path="/cardnontech" element={<><VantaBackground effect="waves" /><CardNonTech /></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
