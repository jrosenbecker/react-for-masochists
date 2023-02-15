import { FC } from 'react';


export const Counter: FC = () => {
  let count = 0

  const decrementCount = () => {
    count -= 1
  }

  const incrementCount = () => {
    count += 1
  }

  return (
    <div className="flex flex-row">
      <button onClick={decrementCount}>-</button>
      <div className="m4">{count}</div>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}