
import React from 'react';
import './App.css';
import _ from 'lodash';
import CharacterCard from './CharacterCard';

 
let message = 'Hello'
 
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
    reset: 1
  }
}
 
class App extends React.Component {

  state = prepareStateFromWord(message);
  reset =()=>{
    this.setState({
      reset: this.state.reset + 1,
      completed: !this.state.completed
    })
  }
  shoot = (a) => {
    alert(a);
}
  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }
 
  render() {
    return (
      <div class="ex1">
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              attempt={this.state.attempt}
              activationHandler={this.activationHandler}
              reset = {this.state.reset}
            />
          ))
        }
       
        <div class="ex1"> <h2>Selected</h2></div>

    
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <div >Attemp {this.state.attempt}</div>
        <div class="ex1">
        {
          this.state.completed && <h3>Complete</h3>
        }
        </div>
        {
            <button onClick={() => this.shoot("Hello")}>Answer</button>
        }
        {
          this.state.completed &&<button onClick={this.reset}>Reset</button>
        }
        
      </div>
     
    )
  }
}
 
export default App