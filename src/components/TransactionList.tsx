import React from 'react';
import { DollarSign } from 'lucide-react';
import { Transaction } from '../types';
import { TransactionSummary } from './TransactionSummary';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-black rounded-3xl shadow-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-6 h-6 text-gray-400" />
        <h2 className="text-2xl font-bold text-gray-200">Recent Transactions</h2>
      </div>

      <TransactionSummary transactions={transactions} />

      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No transactions yet</p>
        ) : (
          transactions.map(transaction => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-200">{transaction.category}</p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
              <p className="text-lg font-semibold text-white">
                ${transaction.amount.toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}