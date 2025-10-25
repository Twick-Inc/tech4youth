import React from 'react';

const RecentCommentsWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-youth-primary">
        Recent Comments
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-2 text-sm text-gray-600 hover:text-youth-primary cursor-pointer transition-colors">
          <span className="text-gray-400">💬</span>
          <p>
            <span className="font-semibold">Sarah Mwalimu</span> on{" "}
            <span className="hover:underline">How AI is Transforming Education in Tanzania</span>
          </p>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-600 hover:text-youth-primary cursor-pointer transition-colors">
          <span className="text-gray-400">💬</span>
          <p>
            <span className="font-semibold">John Mbwana</span> on{" "}
            <span className="hover:underline">Cybersecurity Best Practices for Beginners</span>
          </p>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-600 hover:text-youth-primary cursor-pointer transition-colors">
          <span className="text-gray-400">💬</span>
          <p>
            <span className="font-semibold">Grace Kimaro</span> on{" "}
            <span className="hover:underline">Programming Skills for Youth Employment</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentCommentsWidget;

