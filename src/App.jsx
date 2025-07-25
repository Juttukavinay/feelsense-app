import React, { useState } from 'react';
import Sentiment from 'sentiment';

export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const analysis = sentiment.analyze(text);
    const score = analysis.score;

    if (score > 0) setResult({ type: 'Positive', emoji: '😊', color: 'text-green-600' });
    else if (score < 0) setResult({ type: 'Negative', emoji: '😡', color: 'text-red-600' });
    else setResult({ type: 'Neutral', emoji: '😐', color: 'text-gray-600' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-purple-700">🎮 FeelSense Analyzer</h1>
        <textarea
          className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          placeholder="Type something fun or angry..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={analyzeSentiment}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Analyze
        </button>

        {result && (
          <div className={`mt-6 text-xl font-semibold ${result.color}`}>
            Sentiment: {result.type} {result.emoji}
          </div>
        )}
      </div>
    </div>
  );
}
