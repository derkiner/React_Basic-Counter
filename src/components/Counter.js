import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }
    return (
      <div className="wrapper">
        <h1 className="title">Basic Counter</h1>
        <h1 className="title">{count}</h1>

        <div className="btnWrapper">
          <button className="btn" onClick={increase}>
            UP
          </button>
          <button className="btn" onClick={decrease}>
            DOWN
          </button>
        </div>
      </div>
    );
}

export default Counter