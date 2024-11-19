import React from 'react';

interface DisplayProps {
  value: string;
  operation: string;
  expression: string;
}

export function Display({ value, operation, expression }: DisplayProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl mb-6 shadow-inner">
      <div className="flex flex-col items-end gap-2">
        {/* Expression Display */}
        <div className="text-lg text-gray-500 font-mono h-6">
          {expression || '\u00A0'}
        </div>

        {/* Main Display */}
        <div className="text-6xl font-light text-white font-mono tracking-tight">
          $
          {Number(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}