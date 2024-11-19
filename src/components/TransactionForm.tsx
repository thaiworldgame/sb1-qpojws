import React from 'react';
import { Tag, Clock } from 'lucide-react';

const categories = [
  'Food & Dining',
  'Transportation',
  'Shopping',
  'Entertainment',
  'Bills & Utilities',
  'Healthcare',
  'Other'
];

interface TransactionFormProps {
  category: string;
  setCategory: (category: string) => void;
  date: string;
  setDate: (date: string) => void;
}

export function TransactionForm({
  category,
  setCategory,
  date,
  setDate,
}: TransactionFormProps) {
  return (
    <div className="grid gap-4 mb-2">
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-1">
          <Tag className="w-4 h-4" />
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-1">
          <Clock className="w-4 h-4" />
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </div>
  );
}