import React, { useState, useCallback, useMemo, memo } from "react";

const RegularChildComponent = ({ count, onClick }) => {
  console.log("RegularChild rendered");
  return (
    <div className="p-4 border border-gray-300 rounded mb-4 bg-white">
      <h3 className="font-bold">Regular Child</h3>
      <p>Count: {count}</p>
      <button 
        onClick={onClick}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};

const MemoizedChildComponent = memo(({ count, onClick }) => {
  console.log("MemoizedChild rendered");
  return (
    <div className="p-4 border border-blue-300 rounded mb-4 bg-blue-50">
      <h3 className="font-bold text-blue-800">Memoized Child (memo)</h3>
      <p>Count: {count}</p>
      <button 
        onClick={onClick}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
});

function TestHook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [unrelatedState, setUnrelatedState] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num;
    }
    return result;
  };

  const resultWithoutMemo = expensiveCalculation(count1);


  const resultWithMemo = useMemo(() => {
    return expensiveCalculation(count1);
  }, [count1]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Performance Hooks Demo</h1>

      {/* Counter to cause re-renders */}
      <div className="p-4 border border-gray-300 rounded mb-6 bg-yellow-50">
        <h2 className="font-bold">Unrelated State</h2>
        <p className="mb-2">
          This counter is unrelated to the child components.
          When updated, it will cause the parent to re-render.
        </p>
        <p>Count: {unrelatedState}</p>
        <button
          onClick={() => setUnrelatedState(unrelatedState + 1)}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mt-2"
        >
          Update Unrelated State
        </button>
        <p className="text-sm text-gray-600 mt-2">
          (Watch the console to see which components re-render)
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-3">React.memo Example:</h2>
        <RegularChildComponent count={count1} onClick={incrementCount1} />
        <MemoizedChildComponent count={count2} onClick={incrementCount2} />
        <p className="text-sm text-gray-600 mt-1">
          The regular component re-renders on every parent render, 
          while the memoized one only re-renders when its props change.
        </p>
      </div>

      {/* useMemo Example */}
      <div className="p-4 border border-green-300 rounded mb-4 bg-green-50">
        <h2 className="font-bold text-green-800">useMemo Example:</h2>
        <p>Count: {count1}</p>
        <p>Result with useMemo: {resultWithMemo}</p>
        <p>Result without useMemo: {resultWithoutMemo}</p>
        <p className="text-sm text-gray-600 mt-2">
          useMemo prevents expensive recalculations on every render
        </p>
      </div>
    </div>
  );
}

export default TestHook;