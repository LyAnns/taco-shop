import React, {Component} from "react";
import './Order.css';

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statuses: ['not ready', 'ready']
        }
    }

    updateOrderStatus(event) {
        const orderStatus = event.target.value
        this.props.updateOrderStatus(this.props.order.orderNumber, orderStatus)
    }

    deleteOrder() {
        this.props.deleteOrder(this.props.order.orderNumber)
    }

    render() {
        let order = this.props.order;

        return (
            <div className="Order">
                <div>{order.customerName} - {order.selectedTaco.name}</div>
                <div>
                    <select
                        onChange={this.updateOrderStatus.bind(this)}
                        value={this.props.order.orderStatus}>
                        {this.state.statuses.map((status, index) => <option key={index}>{status}</option>)}
                    </select>

                </div>
                <div>
                    <button
                        onClick={this.deleteOrder.bind(this)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Order