import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import _ from 'lodash';
/*
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }

}

export default class WordCard extends
    Component {
    constructor(props) {
        super(props);
        this.state = {
            attempt: '',
        }
    }
    shoot = (a) => {
        alert(a);
        this.completed = true;
       

    }

    componentWillMount() {
        let data = prepareStateFromWord(this.props.value);
        this.setState({
            word: data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess: data.guess,
            completed: data.completed,
        })
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({ guess })
        if (guess.length == this.state.chars.length) {
            if (guess.join('').toString() == this.state.word) {
                this.setState({ guess: [], completed: true })
            }
            else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
            }
        }

        {
            {
                this.state.chars.map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                    activationHandler={this.activationHandler} />)
            }
        }
    }
    render() {
        console.log(this.state);
        return (

            <div style={container}>  {this.state.chars.map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                activationHandler={this.activationHandler} />)} <br></br>
                <h2>Selected guess ={this.state.guess}</h2> 
                {
                    (this.state.guess).map((item, index) => (
                        <CharacterCard
                            value={item}
                            key={index}
                            activationHandler={this.activationHandler}
                        />
                    ))
                }

                <text ><h2>attempt ={this.state.attempt}</h2></text>
                   <button  onClick={() => this.shoot("Hello")}>Answer</button>
            </div>
        );
    }
}

const container ={
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
    
}
/*
const mystyle = {
    color: "white",
    width: '40%', opacity: 0.7,
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
}
const mystylecolor = {
    flex: 1, flexDirection: 'colum', backgroundColor: "#FF0000", alignItems: 'center', width: '100%', height: '100%',justifyContent: 'center',
    color: "white",
    width: '100%', 
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
}
const mystylex = {

    flex: 1, flexDirection: 'row', backgroundColor: "#FF0000", alignItems: 'center', width: '100%', height: '100%',
    color: "green",
    width: '100%', opacity: 0.4,
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
}
const button1 = {

    color: "red", backgroundColor: "orange", width: '60px', height: '30px'
}*/
