import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalStatistics = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  onLeaveFeedback = (event) => {
   const  key = event.currentTarget.textContent;
    this.setState((prevState)=>({
      [key]:prevState[key]+1, 
    }))
  }

  positivePercentage = () => Math.round((this.state.good / this.countTotalStatistics()) * 100) || 0;
    

  render() {
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
       >
         <h1>Please leave feedback</h1>
         <FeedbackOptions
           options={this.state}
           onLeaveFeedback={this.onLeaveFeedback} />
         
         <Statistics
          {...this.state}
          total={this.countTotalStatistics()}
          positivePercentage={this.positivePercentage()} />
    </div>
  );
  }
};

export default App;