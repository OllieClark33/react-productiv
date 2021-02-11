import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

    constructor(props) {
        super(props);
        let taskName;
        let completed;
        for (const [key, value] of Object.entries(this.props.task)) {
            taskName = key;
            completed = value;
        }
        this.state = {
            completed: completed,
            editing: false,
            idName: taskName
        }
        this.click = this.click.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.editRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    click() {
        this.setState({ completed: !this.state.completed }, function() {
            alert("Currently under construction, will not be working correctly - please wear hard hats");
            this.props.click(this.state);
        })
    }

    remove() {
        this.props.removeItem(this.state);
    }

    edit() {
        this.setState({
            editing: !this.state.editing
        }, function() {
            alert("Currently under construction, will not be working correctly - please wear hard hats");
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            editing: false,
            idName: this.editRef.current.value
        }, function() {
            this.props.editItem(this.state)
        })
    }


    render() {
        let taskObj = this.props.task
        let task = Object.keys(taskObj).toString();
        if (this.state.editing) {
            return(
                <div className="listitem-container">
                    <div className="editor-container">
                        <form className="task-updater" onSubmit={this.handleSubmit}>
                            <input type="text" defaultValue={this.state.idName} ref={this.editRef} />
                        </form>
                    </div>
                    <div className="button-container">
                        <button className="edit-button" onClick={this.edit}>
                            <i class="fas fa-edit"></i> 
                        </button>
                        <button className="remove-button" onClick={this.remove}>
                            <i class="fas fa-trash-alt"></i>  
                        </button>
                    </div>
                </div>
            )
        }
        return(
            <div className="listitem-container">
                <div className="task-name-container" onClick={this.click}>
                    <span className="task-name">
                        {task}
                    </span>
                </div>
                <div className="button-container">
                    <button className="edit-button" onClick={this.edit}>
                        <i class="fas fa-edit"></i> 
                    </button>
                    <button className="remove-button" onClick={this.remove}>
                        <i class="fas fa-trash-alt"></i>  
                    </button>
                </div>
            </div>
        )
    }
}

export default ListItem;