import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNum: null,
            arifmeticSign: null,
            secondNum: null,
            count: null,
        }
    }
    render() {

        const onChangeFirstValue = (e) => {
            this.setState({ firstNum: +e.target.value })
        }
        const onChangeSecondValue = (e) => {
            this.setState({ secondNum: +e.target.value })
        }
        const onSelected = (e) => {
            this.setState({ arifmeticSign: e.target.value })

        }
        const onClear = () => {
            this.setState({ count: null, firstNum: '', secondNum: '' })
        }

        const onCount = () => {
            switch (this.state.arifmeticSign) {
                case '*':
                    this.setState({ count: this.state.firstNum * this.state.secondNum })
                    break;
                case ':':
                    this.setState({ count: this.state.firstNum / this.state.secondNum })
                    break;
                case '+':
                    this.setState({ count: this.state.firstNum + this.state.secondNum })
                    break;
                case '-':
                    this.setState({ count: this.state.firstNum - this.state.secondNum })
                    break;

                default:
                    this.setState({ count: this.state.firstNum + this.state.secondNum })
                    break;
            }
        }

        return (
            <div style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <p >
                    <input value={this.state.firstNum} type='number' onChange={onChangeFirstValue} />
                    <select style={{ marginLeft: '15px' }} onChange={onSelected} defaultValue='+'>
                        <option value="*">*</option>
                        <option value=":">:</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input value={this.state.secondNum} style={{ marginLeft: '15px' }} type='number' onChange={onChangeSecondValue} />
                    <button style={{ marginLeft: '15px' }} onClick={onCount}>=</button>
                    <span style={{ marginLeft: '15px' }}>{this.state.count}</span>
                    <button style={{ marginLeft: '15px' }} onClick={onClear}>C</button>
                </p>
            </div>
        );
    }
}

export default Calculator;