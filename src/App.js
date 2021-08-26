import React, {Component} from 'react';
import './App.css';

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: "",
      numberB: "",
      total: "", 
      validation: true,  
      listItems: [
        { itemId: 1, fullName: "Maya", gender: "Female" },
        { itemId: 2, fullName: "Join", gender: "Male" },
        { itemId: 3, fullName: "Rika", gender: "Female" }
      ]
    };
  }

  summationInput() {
    this.setState( (total, props) => {
      let summationInput = Number(this.state.numberA) + Number(this.state.numberB);
      if (isNaN(summationInput)) {
        return {validation: false};
      } 
      return {
        total: summationInput
      };
    });

  }

  render() {
    // Array of <li>
    var listItems = this.state.listItems.map(e => (
      <li key={e.itemId} >Name : {e.fullName} - Gender : {e.gender}</li>
    ));

    return (
      <div>
        <h1>Hello!</h1>
        <div className='box'>
          <div className="message"> {this.state.validation === false ? "Please input number" : "" }</div>
          <input
            type="text"
            value={this.state.numberA}
            onChange={(event) =>this.setState({numberA: event.target.value})}
          />
          <input
            type="text"
            value={this.state.numberB} 
            onChange={(event) => this.setState({numberB: event.target.value})}
          />
          <button onClick={this.summationInput.bind(this)}>Summation</button>
          <div className="total">Total: {this.state.total}</div>
        </div>
        <hr className="new3"></hr>
        <div>
          <div className="title">List items</div>
          <ul className="list">
            {listItems}
          </ul>
        </div>
      </div>

    );
  }
}

export default Total;
