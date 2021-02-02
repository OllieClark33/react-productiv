import React, { Component } from 'react';
import ListItem from "./ListItem.js";
import './List.css';
import { v4 as uuidv4 } from 'uuid';

class List extends Component {

    render() {
        let tasks = this.props.tasks;
        let removeItem = this.props.removeItem;
        return (
            <div id="list-container">
                <ul id="todo-list">
                    {tasks.map((task) => (<li className="list-item" key={uuidv4()}> <ListItem removeItem={removeItem.bind(this)} task={task} /> </li>))}
                </ul>
            </div>
        )
    }
}

export default List;