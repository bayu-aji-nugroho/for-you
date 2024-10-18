import React, { useState } from 'react';
import CloudBackground from './components/CloudBackground';
import TypingText from './components/TypingText';
import Emoji from './components/Emoji';
import ApologyButton from './components/ApologyButton';
import DialogueBox from './components/DialogueBox';


function App() {
    const [emotion, setEmotion] = useState('sad');

    const handleRespond = (newEmotion) => {
        setEmotion(newEmotion);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 overflow-hidden">
            <CloudBackground />
            <div className="z-10 text-center">
                <TypingText />
                <Emoji emotion={emotion} />
                <ApologyButton setEmotion={setEmotion} />
                <DialogueBox onRespond={handleRespond} />
            </div>
           
        </div>
    );
}

export default App;
