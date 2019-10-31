import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Number from './components/number'


const App = () => {

    return (
      <div>
        <Number />
      </div> 
  )
}
export default App;



// class Test extends Component {
//   state = {
//     number: 0
//   }
//   increment = () => {
//     this.setState({number: this.state.number +1})
//   }

//   decrement = () => {
//     this.setState({number: this.state.number -1})
//   }

//   render() {
//     return (
//     <div>
//       <button onClick = {this.increment}>+</button>
//       <button onClick = {this.decrement}>-</button>
//       <p>{this.state.number}</p>
//     </div>
//     )
//   }
// }

