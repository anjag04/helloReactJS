import React from "react";

const titleStyles = {
  fontSize: 16,
  color: "#bada55"
};

const shopping = ["Eggs", "Milk", "Bread", "Coffee", "Juice"];

export default class Test extends React.Component {
  state = {
    list: ["Eggs", "Milk", "Bread", "Carrots"],
    counter: 4
  };

  handleButtonClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleInputChange = event => {
    this.setState({ text: event.target.value });
  };

  handleAddShopping = () => {
    const currentList = this.state.list;
    const newList = currentList.concat(this.state.text);
    this.setState({
      list: newList,
      text: "",
      counter: newList.length
    });
  };

  handleRemove = key => {
    const currentList = this.state.list;
    const newList = currentList.filter((item, index) => index !== key);
    this.setState({
      list: newList,
      counter: newList.length
    });
  };

  render() {
    return (
      <div>
        Count : {this.state.counter}
        <br />
        <h3 stle={titleStyles}>{this.props.title}</h3>
        <ol>
          {this.state.list.map((item, key) => (
            <li key={item}>
              {item}
              <button
                style={{ marginLeft: 10, backgroundColor: "red" }}
                onClick={() => this.handleRemove(key)}
              >
                x
              </button>
            </li>
          ))}
        </ol>
        <input
          value={this.state.text}
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddShopping}>Add</button>
      </div>
    );
  }
}
