import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Shake from "./components/Shake";
import Card from "./components/Card";
import friend from "./friends.json";

class App extends Component {

  componentDidMount() {
    this.shuffleCards();
  }
  // intial state
  state ={
    friend,
    topScore : 0 ,
    score : 0,
    selected:[],
    info:"Click an image to begin!",
    shake:false
  }

  // when the pic is clicked
  gamePlay = id => {
    if (!this.state.selected.includes(id)){
      
      // increment the score
      this.incrementScore();

      // set state by pushing the array number 
      this.setState({

        // updating clicked and info
        clicked: this.state.selected.push(id)
       
      });
    
    }else {
     // set shake first then call the delay function
      this.setState({
        shake:true
      }, () => {
      this.ResetGameWithDelay()
    });
    }
  };

  // update score and topScore
  incrementScore = () =>{

    // increment the newScore by one 
    let newScore = this.state.score + 1;

    // set state
    this.setState({
      score: newScore,
      info:"You guessed correctly!"
    })

    // updating top score 
    if (newScore >= this.state.topScore){
      this.setState({
        topScore: newScore
      })
    }

    // updating the info on the nav
    if(newScore === 12){
      this.setState({
        info:"You Win!"
      })
      // this.resetGame()
    }
    
    this.shuffleCards()
  };

  // Reset Game
  resetGame = () => {

      // reset the following 
      this.setState({
        topScore: this.state.topScore,
        score: 0,
        selected: [],
        info:"You guessed incorrectly!",
        shake: false
      })
      this.shuffleCards()
  }

   // delay reset function by 3s
   ResetGameWithDelay=()=>{

    // storing the value in reset since we can't refer it inside the setTimeout function
    let reset = this.resetGame

    setTimeout(function(){
 
     // reset the following 
      reset ();

    }, 200)
  }

  // shuffle cards
  shuffleCards = () => {
    let shuffledCards = this.state.friend.sort(function() { return 0.5 - Math.random() })
    this.setState({
      friend:shuffledCards
    })
  }


  render() {
    return (
      <Wrapper
      >
      <Navbar
      topScore={this.state.topScore}
      score={this.state.score}
      info={this.state.info}
      />
      <Header>
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </Header>
      <Shake shake = {this.state.shake}>
        
      {this.state.friend.map(friends => (
        <Card
          name = {friends.name}
          image = {friends.image}
          key = {friends.id}
          id = {friends.id}
          gamePlay = {this.gamePlay}
          shake={this.state.shake}
        />
      ))}
     </Shake>
        
      </Wrapper>
    );
  }
}

export default App;
