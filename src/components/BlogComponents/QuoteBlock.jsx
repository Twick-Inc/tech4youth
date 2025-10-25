import React from 'react';

const QuoteBlock = ({ quote, author }) => {
  return (
    <div className="bg-gray-50 border-l-4 border-youth-primary p-6 my-8 rounded-r-lg">
      <div className="flex items-start gap-4">
        <span className="text-6xl text-youth-primary leading-none">"</span>
        <div>
          <p className="text-gray-800 italic mb-4 text-lg">
            {quote}
          </p>
          <div className="bg-youth-primary text-white px-6 py-2 rounded-r-full inline-block">
            <span className="font-semibold">{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;

