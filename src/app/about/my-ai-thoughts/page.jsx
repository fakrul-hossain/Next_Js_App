import React from 'react';

const thoughts = [
  {
    title: 'How AI is Reshaping Frontend Development',
    date: 'July 4, 2025',
    content: 'From smart code suggestions to full UI generation, AI is transforming the way frontend developers build web interfaces. Tools like GitHub Copilot and ChatGPT are becoming essential in daily workflows.',
  },
  {
    title: 'My Journey Using AI in Learning',
    date: 'June 20, 2025',
    content: 'Using AI to learn Next.js and TypeScript has been a game-changer. Whenever I get stuck, I turn to AI to get instant code help, examples, and explanations tailored to my level.',
  },
  {
    title: 'Will AI Replace Developers?',
    date: 'June 5, 2025',
    content: 'AI will assist, not replace. Developers who embrace AI will become more productive and efficient. The future is collaboration, not competition.',
  },
];

const MyAiThoughts = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        My AI Thoughts
      </h1>

      <div className="space-y-6">
        {thoughts.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-1">{item.title}</h2>
            <p className="text-sm text-gray-400 mb-3">{item.date}</p>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAiThoughts;
