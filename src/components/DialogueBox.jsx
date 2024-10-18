import React from 'react';

const DialogueBox = ({ onRespond }) => {
    return (
        <div className="text-center mt-8">
            <p className="text-lg text-gray-800 font-semibold mb-4">
                ...
            </p>
            <div className="flex justify-center space-x-4">
                <button
                    className="px-6 py-2 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-600 transition-colors"
                    onClick={() => onRespond('happy')}
                >
                    Tersenyum 😊
                </button>
                <button
                    className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition-colors"
                    onClick={() => onRespond('surprise')}
                >
                    Beri kejutan 🎉
                </button>
                <button
                    className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition-colors"
                    onClick={() => onRespond('sad')}
                >
                    Tetap sedih 😢
                </button>
            </div>
        </div>
    );
};

export default DialogueBox;
