import React, {Component} from "react";
import Taco from "../Taco/Taco.js"

import './TacoList.css';

class TacoList extends Component {

    render() {
        let tacos = this.props.tacos;
        return (
            <div className="TacoList">
                <div>Available Tacos to order:</div>
                {tacos.map (taco => (<Taco key={taco.tacoNumber} taco={taco}/>))}
            </div>
        );
    }
}

export default TacoList