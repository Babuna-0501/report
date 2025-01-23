import React from 'react';

const TextBlock = ({ title, content }) => {
  return (
    <div className="flex flex-col items-center mt-8 text-base">
      <h3 className="text-2xl font-bold text-green-700">{title}</h3>
      {content.map((text, index) => (
        <div key={index} className="mt-3 text-stone-800">
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextBlock;