import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header.js'
import TacoList from './Components/TacoList/TacoList.js'
import OrderList from './Components/OrderList/OrderList.js'
import NewOrderEntry from './Components/NewOrderEntry/NewOrderEntry.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tacosss: [],
            ordersss: [],
            lastOrderNumber: 0
        }
    }

    componentDidMount() {
        axios.get("/api/tacos").then((res)=>{
            const tacos = res.data
            this.setState({
                tacosss: tacos
            })
        })


        axios.get("/api/orders").then((res)=>{
            const orders = res.data
            this.setState({
                ordersss: orders
            })
        })
    }

    addOrder(customerName, tacoNumber) {
        const orderNumber = this.state.lastOrderNumber + 1
        const selectedTacoIndex = this.state.tacosss.findIndex(taco => taco.tacoNumber == tacoNumber)
        const newOrder = {
            orderNumber,
            customerName,
            selectedTaco: this.state.tacosss[selectedTacoIndex],
            orderStatus: 'not ready'
        }

        axios.post('/api/orders', newOrder ).then( res => {

            const orders = res.data;

            this.setState({
                ordersss: orders,
                lastOrderNumber: orderNumber
            })
        });
    }

    deleteOrder(orderNumber){
        axios.delete("/api/orders/"+orderNumber).then( res => {
            const orders = res.data
            this.setState({
                ordersss: orders
            })
        });
    }

    updateOrderStatus(orderNumber, orderStatus) {
        const orders = [...this.state.ordersss]; 
        const orderIndex = orders.findIndex(order => order.orderNumber == orderNumber)
        orders[orderIndex].orderStatus = orderStatus

        axios.put("/api/orders/"+orderNumber, orders[orderIndex]).then( res => {
            const orders = res.data
            this.setState({
                ordersss: orders
            })
        });
    }

    render() {
        return (
            <div className="App">
                <Header/>

                <main className="App-main">
                    <div className="OrderColumn">
                        <TacoList tacos={this.state.tacosss}/>
                    </div>
                   
                    <div className="OrderColumn">
                        <OrderList
                            tacos={this.state.tacosss}
                            orders={this.state.ordersss}
                            deleteOrder={this.deleteOrder.bind(this)}
                            updateOrderStatus={this.updateOrderStatus.bind(this)}
                        />
                        <NewOrderEntry 
                                tacos={this.state.tacosss}
                                addOrder={this.addOrder.bind(this)}
                        />
                    </div>
                </main>

            </div>
        );

    }
}

export default App;
