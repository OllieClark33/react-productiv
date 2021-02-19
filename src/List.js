import React, { Component } from 'react';
import ListItem from "./ListItem.js";
import './List.css';
import { v4 as uuidv4 } from 'uuid';

class List extends Component {

    render() {
        let length = this.props.todosLength;
        let taskOrTasks;
        if (length === 0) {
            taskOrTasks = "tasks"
        } else if (length === 1) {
            taskOrTasks = "task remaining"
        } else {
            taskOrTasks = "tasks remaining"
        }
        let todos = this.props.todos;
        let removeItem = this.props.removeItem;
        // let click = this.props.click;
        let editItem = this.props.editItem;
        return (
            <div id="list-container">
                <h6 id="number-of-tasks">You have {length} {taskOrTasks} </h6>
                <ul id="todo-list">
                    {todos.map((task) => (<li className="list-item" key={uuidv4()}> <ListItem removeItem={removeItem.bind(this)}  editItem={editItem.bind(this)} task={task} /> </li>))} {/* click={click.bind(this)} */}
                </ul>
            </div>
        )
    }
}

export default List;
