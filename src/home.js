import { useEffect, useState } from 'react';
import Button from "./button";

function Home({ startTyping }) {
    const [text, setText] = useState("");
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const fullText = "Building innovative solutions through FullStack Development and the power of Artificial Intelligence";
    
    useEffect(() => {
        if (!startTyping) return;
        
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setIsTypingDone(true);
                    // Show button after typing and color transition
                    setTimeout(() => {
                        setShowButton(true);
                    }, 500);
                }, 500);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [startTyping]);

    const formatText = () => {
        return text.split(' ').map((word, index, array) => {
            if (word === 'FullStack' || word === 'Development' || 
                word === 'Artificial' || word === 'Intelligence') {
                return (
                    <span key={index} className={isTypingDone ? "highlight" : ""}>
                        {word}{index < array.length - 1 ? ' ' : ''}
                    </span>
                );
            }
            return word + (index < array.length - 1 ? ' ' : '');
        });
    };

    return (
        <>
            <div className="greeting">
                <p>Hello! I'm Chandru S</p>
                <h1>{formatText()}</h1>
                <div className={`button-container ${showButton ? 'show' : ''}`}>
                    <Button placeholder={"Let's Talk"} link="https://www.linkedin.com/in/chandrus-03/" />
                </div>
            </div>
        </>
    )
}
export default Home;