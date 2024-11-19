import React from 'react';
import { Calculator, Clock, DollarSign, Tag } from 'lucide-react';
import { Display } from './components/Display';
import { CalcButton } from './components/CalcButton';
import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { useCalculator } from './hooks/useCalculator';
import { useTransactions } from './hooks/useTransactions';

function App() {
  const {
    display,
    operation,
    expression,
    handleNumber,
    handleOperation,
    calculateResult,
    handleClear,
  } = useCalculator();

  const {
    category,
    setCategory,
    date,
    setDate,
    transactions,
    handleSubmit,
  } = useTransactions(display, handleClear);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Section */}
        <div className="bg-black rounded-3xl shadow-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="w-6 h-6 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-200">Spending Calculator</h1>
          </div>

          <Display value={display} operation={operation} expression={expression} />

          <TransactionForm
            category={category}
            setCategory={setCategory}
            date={date}
            setDate={setDate}
          />

          <div className="grid grid-cols-4 gap-2 mt-6">
            {/* First Row */}
            <CalcButton onClick={handleClear} variant="secondary">C</CalcButton>
            <CalcButton onClick={() => handleOperation('%')} variant="secondary">%</CalcButton>
            <CalcButton onClick={() => handleOperation('/')} variant="operator">÷</CalcButton>
            <CalcButton onClick={() => handleOperation('*')} variant="operator">×</CalcButton>

            {/* Number Rows */}
            <CalcButton onClick={() => handleNumber('7')}>7</CalcButton>
            <CalcButton onClick={() => handleNumber('8')}>8</CalcButton>
            <CalcButton onClick={() => handleNumber('9')}>9</CalcButton>
            <CalcButton onClick={() => handleOperation('-')} variant="operator">−</CalcButton>

            <CalcButton onClick={() => handleNumber('4')}>4</CalcButton>
            <CalcButton onClick={() => handleNumber('5')}>5</CalcButton>
            <CalcButton onClick={() => handleNumber('6')}>6</CalcButton>
            <CalcButton onClick={() => handleOperation('+')} variant="operator">+</CalcButton>

            <CalcButton onClick={() => handleNumber('1')}>1</CalcButton>
            <CalcButton onClick={() => handleNumber('2')}>2</CalcButton>
            <CalcButton onClick={() => handleNumber('3')}>3</CalcButton>
            <CalcButton onClick={calculateResult} variant="operator">=</CalcButton>

            {/* Last Row */}
            <CalcButton onClick={() => handleNumber('0')} className="col-span-2">0</CalcButton>
            <CalcButton onClick={() => handleNumber('.')}>.</CalcButton>
            <CalcButton
              onClick={handleSubmit}
              disabled={!category}
              variant="submit"
            >
              Add
            </CalcButton>
          </div>
        </div>

        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;