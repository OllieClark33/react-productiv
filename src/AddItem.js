import React, { Component } from 'react';
import './AddItem.css';
import Button from 'react-bootstrap/Button'

class AddItem extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            newTask: {} 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRef = React.createRef();
    }

    handleSubmit(e) {
        let wsRegex = new RegExp(/\S+/, "g")
        let input = this.inputRef.current.value
        e.preventDefault();
        if (wsRegex.test(input)) {
            this.setState({ newTask: { [input]: false } }, function() {
                this.inputRef.current.value = "";
                this.props.addItem(this.state.newTask)
            })
            return;
        }
        return; 
    }

    render() {
        return(
            <div id="additem-container">
                <form id="additem-form" onSubmit={this.handleSubmit}>
                    <label id="input-label">What have you got to do today?</label>
                    <div id="input-container">
                        <input type="text" ref={this.inputRef} id="input-field" />
                        <Button id="submit-button" variant="primary" type="submit">
                            <i class="fas fa-plus"></i>
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem;