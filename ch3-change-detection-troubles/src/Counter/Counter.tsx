import { FC, useState } from 'react';



export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-row bg-blue p4 rounded">
      <button onClick={decrementCount}>-</button>
      <div className="m4">{count}</div>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}