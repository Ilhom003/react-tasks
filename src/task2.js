import React from 'react';

class CalcOld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: null,
            old: null
        }
    }
    render() {
        const onChangeOld = (e) => {
            this.setState({ year: +e.target.value })
        }
        const onTransfer = () => {
            this.setState({ old: 2023 - this.state.year })
        }
        return (
            <div>
                <p>Tug'ilgan yilingizni kiriting <input onChange={onChangeOld} type='number' /> <button onClick={onTransfer}>Transfer</button> </p>
                <p> Siz {this.state.old} yoshdasiz!</p>
                <hr/>
            </div>
        );
    }
}


export default CalcOld;