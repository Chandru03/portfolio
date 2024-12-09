import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import './App.css';
import NavBar from "./navbar";
import Home from './home';
import About from './about';
import Documentary from './documentary';
import Projects from './projects';
import Footer from './footer';

function App() {
    const [loading, setLoading] = useState(true);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            // Start typing animation after loading screen is complete
            setTimeout(() => {
                setStartTyping(true);
            }, 1000); // Delay typing until after circle animation
        }, 2000);
    }, []);

    useEffect(() => {
        document.title = "portfolio.chandru";
    }, []);

    return (
        <>
            {loading && <LoadingScreen />}
            <div className={`app-content ${!loading ? 'visible' : ''}`}>
                <NavBar />
                <Home startTyping={startTyping} />
                <About />
                <Documentary />
                <Projects />
                <Footer />
            </div>
        </>
    );
}

export default App;