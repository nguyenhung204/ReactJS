import { useState } from 'react';

function Sum() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [sum, setSum] = useState(0);

    const calculateSum = () => {
        const result = Number(num1) + Number(num2);
        setSum(result);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Tính Tổng Hai Số</h2>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Nhập số thứ nhất"
                    style={{ margin: '5px' }}
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Nhập số thứ hai"
                    style={{ margin: '5px' }}
                />
                <button onClick={calculateSum} style={{ margin: '5px' }}>
                    Tính Tổng
                </button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <strong>Kết quả: {sum}</strong>
            </div>
        </div>
    );
}

export default Sum;