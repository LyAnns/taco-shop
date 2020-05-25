import React, {Component} from "react";
import './OrderList.css';
import Order from '../Order/Order.js'

class OrderList extends Component {

    render() {
        let orders = this.props.orders;
        return (
            <div className="OrderList">
                <div>Orders:</div>
                {orders.map (order => (
                    <Order 
                       key={order.orderNumber} 
                       order={order}
                       deleteOrder={this.props.deleteOrder}
                       updateOrderStatus={this.props.updateOrderStatus}
                    />)
                )}
            </div>
        );
       
    }
}
export default OrderList