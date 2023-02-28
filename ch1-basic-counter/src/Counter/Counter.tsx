import { FC, useState } from 'react';


export const Counter: FC = () => {
  let [count, setCount] = useState(0)

  const decrementCount = () => {
    setCount(count - 1);
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-row">
      <button onClick={decrementCount}>-</button>
      <div className="m4">{count}</div>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}