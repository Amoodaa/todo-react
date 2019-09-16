import React from "react";

export default class extends React.Component {
  state = { input: "" };
  userInput = e => {
    return e.target.value;
  };
  // I need here to pass that function as a prop or what?
  render() {
    const { addItemFunc } = this.props;
    const { input } = this.state;
    return (
      <div>
        <input type="text" name="content" value={input} />
        <button onClick={addItemFunc}>Add</button>
      </div>
    );
  }
}
