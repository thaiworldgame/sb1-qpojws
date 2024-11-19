import { useState } from 'react';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [firstOperand, setFirstOperand] = useState('');
  const [operation, setOperation] = useState('');
  const [expression, setExpression] = useState('');

  const calculatePreview = (first: string, second: string, op: string): string => {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    
    switch (op) {
      case '+': return (num1 + num2).toString();
      case '-': return (num1 - num2).toString();
      case '*': return (num1 * num2).toString();
      case '/': return num2 !== 0 ? (num1 / num2).toString() : 'Error';
      case '%': return ((num1 * num2) / 100).toString();
      default: return second;
    }
  };

  const handleNumber = (num: string) => {
    if (waitingForSecondOperand) {
      setDisplay(num);
      setWaitingForSecondOperand(false);
      setExpression(prev => `${prev}${num}`);
    } else {
      setDisplay(prev => {
        if (prev === '0' && num !== '.') {
          setExpression(num);
          return num;
        }
        if (prev.includes('.') && num === '.') return prev;
        setExpression(prev === '0' ? num : prev + num);
        return prev === '0' && num !== '.' ? num : prev + num;
      });
    }
  };

  const handleOperation = (op: string) => {
    const opSymbol = op === '*' ? '×' : op === '/' ? '÷' : op;
    
    if (operation && !waitingForSecondOperand) {
      calculateResult();
    } else {
      setFirstOperand(display);
      setOperation(op);
      setWaitingForSecondOperand(true);
      setExpression(`${display} ${opSymbol} `);
    }
  };

  const calculateResult = () => {
    if (!operation || !firstOperand) return;

    const first = parseFloat(firstOperand);
    const second = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        if (second === 0) {
          setDisplay('Error');
          setOperation('');
          setFirstOperand('');
          setExpression('Error');
          return;
        }
        result = first / second;
        break;
      case '%':
        result = first * (second / 100);
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperation('');
    setFirstOperand('');
    setExpression('');
    setWaitingForSecondOperand(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setOperation('');
    setFirstOperand('');
    setWaitingForSecondOperand(false);
    setExpression('');
  };

  return {
    display,
    operation,
    expression,
    handleNumber,
    handleOperation,
    calculateResult,
    handleClear,
  };
}