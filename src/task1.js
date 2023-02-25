import React from "react";


class TransferDollar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
            tranfer: null
        }
    }

    render() {
        const onCount = (e) => {
            this.setState({ number: e.target.value })
        }
        const onTransfer = () => {
            this.setState({ tranfer: this.state.number * 15000 })
        }
        return (
            <div>
                <p>  Dollarni kiriting <input type='number' onChange={onCount} /> 1$ o'zbek summasida 15000 so'mni tashkil etadi! <button onClick={onTransfer}>Transfer</button></p>
                <p>Siz kiritgan {this.state.number}$ o'zbek so'miga {this.state.tranfer} so'mni tashkil etadi!</p>
                <hr/>
            </div>
        );
    }
}

export default TransferDollar;