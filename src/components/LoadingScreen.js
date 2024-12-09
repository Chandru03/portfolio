import { useEffect } from 'react';
import '../App.css';

function LoadingScreen() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.loading-screen').classList.add('complete');
        }, 1000);
    }, []);

    return (
        <div className="loading-screen">
            <div className="circle-reveal"></div>
        </div>
    );
}

export default LoadingScreen; 