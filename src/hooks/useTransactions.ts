import { useState } from 'react';
import { Transaction } from '../types';

export function useTransactions(display: string, handleClear: () => void) {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleSubmit = () => {
    if (!category) return;
    
    const newTransaction: Transaction = {
      amount: parseFloat(display),
      category,
      date,
      id: crypto.randomUUID()
    };

    setTransactions(prev => [newTransaction, ...prev]);
    handleClear();
    setCategory('');
  };

  return {
    category,
    setCategory,
    date,
    setDate,
    transactions,
    handleSubmit,
  };
}