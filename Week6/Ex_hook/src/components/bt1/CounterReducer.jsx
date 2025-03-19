import { useReducer } from "react";

const reducer = (state, action) =>{
    switch(action.type){
        case '+':
            return {count: state.count + 1};
        case '-':
            return {count: state.count - 1};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }

}

function CounterReducer (){
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
      <div className="counter-container">
        <h1>Counter with useReducer</h1>
        <p>Count: {state.count}</p>
        <div className="button-group">
          <button onClick={() => dispatch({ type: '+' })}>Increment</button>
          <button onClick={() => dispatch({ type: '-' })}>Decrement</button>
        </div>
      </div>
    );
 
}
export default CounterReducer;