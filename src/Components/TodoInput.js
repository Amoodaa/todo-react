import React from "react";

export default class TodoInput extends React.Component {
  state = { input: "" };
  // userinput takes an object as an argument?? Destructuring  .. aha I remembered (nested objects)
  userInput = ({ target: { value } }) => {
    this.setState({ input: value });
  };
  // I need here to pass that function as a prop or what?
  render() {
    const { addItem } = this.props;
    const { input } = this.state;
    return (
      <div>
        <input
          type="text"
          name="content"
          value={input}
          onChange={this.userInput}
        />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
}
