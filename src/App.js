import './App.css';
import { Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0,
      messageCheckAddItem: "",
      listItems: [
        {
          key: 1, check: false, title: "Adam", completed: true
        },
        { 
          key: 2, check: false, title: "Ricky", completed: false
        },
        {
          key: 3, check: false, title: "Maya", completed: false
        },
        {
          key: 4, check: false, title: "Join", completed: false
        },
        {
          key: 5, check: false, title: "Lion", completed: false
        },
      ],
      newItem: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItem: event.target.value });
  }
  updateNumberA = (event) => {
    this.setState({ numberA: event.target.value });
  }
  updateNumberB = (event) => {
    this.setState({ numberB: event.target.value });
  }
  createNewItem = () => {
    if (!this.state.listItems.find(item => item.title === this.state.newItem)) {
      this.setState({
        listItems: [...this.state.listItems,
        { title: this.state.newItem, done: false }],
        newItem: ""
      });
      this.setState({
        messageCheckAddItem: "",
      });
    } else {
      this.setState({
        messageCheckAddItem: "Please re-enter input ",
      });
    }
  }

  render() {
    return (
      <><div className="App">
        <h1>Hello</h1>
        <input
          className='input-number'
          type='text'
          value={this.state.numberA}
          onChange={this.updateNumberA} />
        <input
          className='input-number'
          type='text'
          value={this.state.numberB}
          onChange={this.updateNumberB} />
        <div>Total: {Number(this.state.numberA) + Number(this.state.numberB)}</div>


      </div><div className="list-items">
          <h2>TodoList</h2>
          <div>
            <input
              value={this.state.newItem}
              onChange={this.updateNewTextValue} />
            <button className="btn "
              onClick={this.createNewItem}>Add Item</button>
            <p className="message">{this.state.messageCheckAddItem}</p>
          </div>
          <ul>
            {this.state.listItems.map((item, index) => {
              return <li key={`todo-${index}`} className={item.completed ? "item completed" : "item"}>
                <p>{ item.title } - { item.completed ? "Done" : "Not done" }</p>
              </li>;
            })}
          </ul>
          
        </div></>
    );
  }
}