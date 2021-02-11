import React, { Component } from 'react';
import AddItem from "./AddItem.js";
import List from "./List.js";
import './App.css';
import Container from 'react-bootstrap/Container';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [] // DATA should change to: todos: [{task: Take Shower, completed: false, id: XXX }]
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this)
  }

  handleAddItem(state) {
    this.setState(({todos}) => (
      { todos: [...todos, state ]}
    )); 
  }

  handleRemoveItem(state) {
    this.setState(({todos}) => ({
      todos: todos.filter(item => 
        { return Object.keys(item).toString() !== state.idName })
    }));
  }

  handleClick(state) {
    let updatedTask = { [state.idName]: state.completed }
    this.setState(({todos}) => ({
       todos: [...todos, updatedTask]
    })); 
  }

  handleEditItem(state) {
    let updatedTask = { [state.idName]: state.completed }
    this.setState(({todos}) => ({
       todos: [...todos, updatedTask]
    })); 
  }

  render() {
    return(
      <Container fluid id="app-container">
        <div id="header">
          <img src="logo192.png" alt="Productiv Duck Logo" id="logo" className="header-item"/>
          <h1 id="title" className="header-item">Productiv</h1>
          <p id="header-desc" className="header-item">The Task Managment System</p>
        </div>
        <AddItem addItem={this.handleAddItem} />
        <div className="list-container">
          <List removeItem={this.handleRemoveItem} click={this.handleClick} editItem={this.handleEditItem} tasks={this.state.todos} todosLength={this.state.todos.length}/>
        </div>
        <div id="footer">
          <footer>
            <h6 id="tag">woodacre.</h6>
            <div id="socials-container">
              <a href="https://github.com/OllieClark33" id="github" className="social-links"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/oliverclark33/" id="linkedin" className="social-links"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:oliverscott678@gmail.com" id="email" className="social-links"><i className="fas fa-at"></i></a>
            </div>
          </footer>
        </div>
      </Container>
    )
  }

}

export default App;
