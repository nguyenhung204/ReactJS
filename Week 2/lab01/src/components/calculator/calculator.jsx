
import { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [display, setDisplay] = useState("");
    const handleNumber = (num) => {
        setDisplay(display + num);
    }
    const handleOperator = (operator) => {
        setDisplay(display + operator);
    }
    const calculate = () => {
        try {
            const result = eval(display)
            setDisplay(result.toString());
        } catch (error) {
            setDisplay("error", error.message);
        }
    }
    const clear = () => {
        setDisplay('');
    };
    return (
        <div>
            <div className="calculator">
                <h1>Calculator</h1>
                <input type="text" value={display} readOnly />
                <div className="keypad">
                    <button onClick={() => handleNumber('7')}>7</button>
                    <button onClick={() => handleNumber('8')}>8</button>
                    <button onClick={() => handleNumber('9')}>9</button>
                    <button onClick={() => handleOperator('+')}>+</button>

                    <button onClick={() => handleNumber('4')}>4</button>
                    <button onClick={() => handleNumber('5')}>5</button>
                    <button onClick={() => handleNumber('6')}>6</button>
                    <button onClick={() => handleOperator('-')}>-</button>

                    <button onClick={() => handleNumber('1')}>1</button>
                    <button onClick={() => handleNumber('2')}>2</button>
                    <button onClick={() => handleNumber('3')}>3</button>
                    <button onClick={() => handleOperator('*')}>×</button>

                    <button onClick={() => handleNumber('0')}>0</button>
                    <button onClick={() => handleNumber('.')}>.</button>
                    <button onClick={calculate}>=</button>
                    <button onClick={() => handleOperator('/')}>/</button>

                    <button onClick={clear}>C</button>
                </div>
            </div>

        </div>
    );
}
export default Calculator;