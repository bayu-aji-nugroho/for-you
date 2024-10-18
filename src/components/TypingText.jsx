import React, { useState, useEffect } from 'react';

const TypingText = () => {
    const [text, setText] = useState('');
    const fullText = 'Maafin aku tika';

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setText((prev) => prev + fullText.charAt(index));
            index++;
            if (index === fullText.length) clearInterval(typingInterval);
        }, 150);
    }, []);

    return (
        <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-wide border-r-4 border-purple-600 animate-caret-blink">
            {text}
        </h1>
    );
};

export default TypingText;
