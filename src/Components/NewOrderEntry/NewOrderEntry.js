import React, {Component} from "react";
import './NewOrderEntry.css';

class NewOrderEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            selectedTacoNumber: -1
        }
    }

    updateCustomerName(event) {
        const customerName = event.target.value
        this.setState({
            customerName
        })
    }

    updateSelectedTaco(event) {
        const selectedTacoNumber = event.target.value
        this.setState({
            selectedTacoNumber
        })
    }

    addOrder() {
        this.props.addOrder(this.state.customerName, this.state.selectedTacoNumber)
        this.setState({ 
            customerName: '',
            selectedTacoNumber: 0
        })
    }

    render() {

        return (
            <div className="NewOrderEntry">
                <div className="NewOrderEntryLabel">Add new Order:</div>
                <div className="NewOrderEntryForm">
                    <div>
                        <span>Customer name:</span>
                        <input  onChange={this.updateCustomerName.bind(this)}  value={this.state.customerName}/>
                    </div>
                    <div>
                        <span>Taco ordered:</span>
                        <select onChange={this.updateSelectedTaco.bind(this)} value={this.state.selectedTacoNumber}>
                            <option key={0} value={0}></option>
                            {this.props.tacos.map(taco => <option key={taco.tacoNumber} value={taco.tacoNumber}>{taco.name}</option>)}
                        </select>

                    </div>
                    <button onClick={this.addOrder.bind(this)}>Add Order</button>
                </div>
            </div>
        );
    }
}

export default NewOrderEntry