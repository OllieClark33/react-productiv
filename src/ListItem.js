import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            hidden: false,
            idName: this.props.task
        }
    //    this.complete = this.complete.bind(this);
        this.remove = this.remove.bind(this);
    }

    // complete(e) { // BUG FIX REQUIRED: When item added or removed, strike-through is removed as default is false
    //     if(!this.state.completed) {
    //         e.target.classList.toggle("change-color")
    //         this.setState({ completed: true });
    //     }
    //     else {
    //         e.target.classList.toggle("change-color")
    //         this.setState({ completed: false });
    //     }
    // }

    remove() {
        this.setState({ hidden: !this.state.hidden }, function() {
            this.props.removeItem(this.state);
        })
    }

    render() {
        let task = this.props.task
        return(
            <div id="listitem-container" onClick={this.complete}>
                <span className="task-name">
                    {task}
                </span>
                <button className="remove-button" onClick={this.remove}>
                    <i class="fas fa-trash-alt"></i>  
                </button>
            </div>
        )
    }
}

export default ListItem;