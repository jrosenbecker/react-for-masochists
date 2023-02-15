import React from 'react';
import { FC, useState } from 'react';



export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  return React.createElement('div', { className: 'flex flex-row' }, [
    React.createElement('button', { onClick: decrementCount }, '-'),
    React.createElement('div', { className: 'm4' }, count),
    React.createElement('button', { onClick: incrementCount }, '+')
  ]);
}