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
          key: 1, title: "Adam", completed: true
        },
        { 
          key: 2, title: "Ricky", completed: false
        },
        {
          key: 3, title: "Maya", completed: false
        },
        {
          key: 4, title: "Join", completed: false
        },
        {
          key: 5, title: "Lion", completed: false
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
  createNewItem = (e) => {
    e.preventDefault();
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

  onChangeBox = item => {
    this.setState(({ listItems }) => ({
      listItems: listItems.map(el =>
        el.key === item.key ? { ...el, completed: !el.completed } : el
      )
    }));
  };

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
          <form>
            <input
              value={this.state.newItem}
              onChange={this.updateNewTextValue} />
            <button className="btn "
              onClick={this.createNewItem}>Add Item</button>
            <p className="message">{this.state.messageCheckAddItem}</p>
          </form>
          <div>
            {this.state.listItems.map((item, index) => {
              return <div key={`todo-${index}`} className={item.completed ? "item completed" : "item"}>
                <input  type="checkbox" className="todo-checkbox" defaultChecked={item.completed} onChange={this.onChangeBox} />
                <span>{ item.title } - { item.completed ? "Done" : "Not done" }</span>
              </div>;
            })}
          </div>
          
        </div></>
    );
  }
}