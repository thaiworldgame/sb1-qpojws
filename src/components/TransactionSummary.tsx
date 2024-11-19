import React from 'react';
import { PieChart, DollarSign } from 'lucide-react';
import { Transaction } from '../types';

interface TransactionSummaryProps {
  transactions: Transaction[];
}

export function TransactionSummary({ transactions }: TransactionSummaryProps) {
  const summary = transactions.reduce((acc, transaction) => {
    acc.total += transaction.amount;
    acc.byCategory[transaction.category] = (acc.byCategory[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {
    total: 0,
    byCategory: {} as Record<string, number>
  });

  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <PieChart className="w-5 h-5 text-orange-500" />
        <h3 className="text-lg font-semibold text-white">Summary</h3>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-400">Total Spending:</span>
        <span className="text-xl font-bold text-white">
          ${summary.total.toFixed(2)}
        </span>
      </div>

      <div className="space-y-2">
        {Object.entries(summary.byCategory).map(([category, amount]) => (
          <div key={category} className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{category}:</span>
            <span className="text-sm font-medium text-white">
              ${amount.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}