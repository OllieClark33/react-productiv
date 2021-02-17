import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

    constructor(props) {
        super(props);
        let taskName, completed, id;
        for (const [key, value] of Object.entries(this.props.task)) {
            if (key === "name") {
                taskName = value;
            } else if (key === "completed") {
                completed = value;
            } else {
                id = value;
            }
        }
        this.state = {
            completed: completed,
            readyToRemove: false,
            editing: false,
            name: taskName,
            id: id
        }
        // this.handleClick = this.handleClick.bind(this);
        this.removeCheck = this.removeCheck.bind(this);
        this.editCheck = this.editCheck.bind(this);
        this.editRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    // handleClick() {
    //     this.setState({ completed: !this.state.completed }, function() {
    //         this.props.handleClick(this.state);
    //     })
    // }

    removeCheck() {
        this.setState({
            readyToRemove: !this.state.readyToRemove
        });
    }

    handleRemove() {
        this.props.removeItem(this.state.id)
    }

    editCheck() {
        this.setState({
            editing: !this.state.editing
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            editing: false,
            name: this.editRef.current.value
        }, function() {
            this.props.editItem(this.state);
        });
    }

    render() {
        let readyToRemove = this.state.readyToRemove;
        let taskName = this.state.name;
        let editing = this.state.editing;

        if (editing) {
            return(
                <div className="edititem-container default-container">
                    <form className="task-updater-form" onSubmit={this.handleSubmit}>
                        <div className="input-container">
                                <input type="text" id="edit-input" defaultValue={this.state.name} ref={this.editRef} />
                        </div>
                        <div className="button-container">
                            <button className="confirm-button" type="submit">
                                <i class="fas fa-check"></i>
                            </button>
                            <button className="return-button" onClick={this.editCheck}> 
                                <i class="fas fa-times"></i> 
                            </button>
                        </div>
                    </form>
                </div>
            )
        } else if (readyToRemove) {
            return (
                <div className="removeitem-container default-container">
                    <div className="removal-container">
                        <span className="removal-check">
                            <strong>Are you sure?</strong>
                        </span>
                    </div>
                    <div className="button-container">
                        <button className="confirm-button" onClick={this.handleRemove}>
                            <i class="fas fa-check"></i>
                        </button>
                        <button className="return-button" onClick={this.removeCheck}> 
                            <i class="fas fa-times"></i> 
                        </button>
                    </div>
                </div>
            )
        }
        return(
            <div className="listitem-container default-container">
                <div className="task-name-container" > {/* onClick={this.handleClick} */}
                    <span className="task-name">
                        {taskName}
                    </span>
                </div>
                <div className="button-container">
                    <button className="edit-button" onClick={this.editCheck}>
                        <i class="fas fa-edit"></i> 
                    </button>
                    <button className="remove-button" onClick={this.removeCheck}>
                        <i class="fas fa-trash-alt"></i>  
                    </button>
                </div>
            </div>
        )
    }
}

export default ListItem;