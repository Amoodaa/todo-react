import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default class extends Component {
  state = {
    todoItems: [
      { id: 9, content: "go to shop" },
      { id: 10, content: "go to shop" },
      { id: 11, content: "go to shop" },
      { id: 12, content: "go to shop" }
    ]
  };

  generateId = (() => {
    let counter = 0;
    return () => ++counter;
  })();
  addItem = content => {
    const newTodoItem = { id: this.generateId(), content };
    const { todoItems } = this.state;
    // data mutation
    // node , [...[1,2,3,4,5], 6]
    this.setState({ todoItems: [...todoItems, newTodoItem] });
  };

  render() {
    const { todoItems } = this.state;
    return (
      // anws, we want to pass a function to the child!, that enables it to do what?
      // to pass the   input value to its parent?
      // exactly, so try to do that.
      // what do you think? go to TodoInput
      <div>
        <TodoInput addItem={this.addItem} />
        <ul>
          {todoItems.map(item => (
            <TodoItem content={item.content} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}
