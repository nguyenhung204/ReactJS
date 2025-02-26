import { useState } from 'react'
import './App.css'

function App() {
  const [initialAmount, setInitialAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [results, setResults] = useState([])

  const calculateInvestment = () => {
    const initial = parseFloat(initialAmount)
    const rate = parseFloat(interestRate) / 100
    const target = parseFloat(targetAmount)
    
    if (isNaN(initial) || isNaN(rate) || isNaN(target)) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    let currentAmount = initial
    let year = 0
    const resultArray = []

    while (currentAmount < target) {
      year++
      currentAmount = currentAmount * (1 + rate)
      resultArray.push({
        year,
        amount: currentAmount
      })
    }

    setResults(resultArray)
  }

  return (
    <div className="container">
      <h1>Tính toán đầu tư</h1>
      <div className="input-group">
        <label>
          Số tiền ban đầu:
          <input 
            type="number" 
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Lãi suất(%/năm):
          <input 
            type="number" 
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Số tiền mục tiêu:
          <input 
            type="number" 
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateInvestment}>Tính toán</button>

      {results.length > 0 && (
        <div className="results">
          <h2>Kết quả:</h2>
          <table>
            <thead>
              <tr>
                <th>Năm</th>
                <th>Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.year}>
                  <td>Năm {result.year}</td>
                  <td>{result.amount.toLocaleString('vi-VN')} VNĐ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default App