import React from 'react';

const Emoji = ({ emotion }) => {
    const emojiSrc = {
        sad: "https://em-content.zobj.net/source/noto-emoji-animations/344/pleading-face_1f97a.gif",
        happy: "https://em-content.zobj.net/source/noto-emoji-animations/344/smiling-face-with-smiling-eyes_1f60a.gif",
        surprise: "https://em-content.zobj.net/source/noto-emoji-animations/344/face-with-open-mouth_1f62e.gif"
    };

    return (
        <div className="flex justify-center mb-6">
            <img
                src={emojiSrc[emotion]}
                alt="emoji"
                className="w-24 h-24 transform transition-transform duration-500 hover:scale-125 animate-spin-slow"
            />
        </div>
    );
};

export default Emoji;
