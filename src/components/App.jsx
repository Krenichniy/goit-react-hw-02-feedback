import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedBackOptions';
import Statistics from './Statistic';

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
    <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback} />
         </Section>

         <Section title='Statistics'>
           <Statistics
              {...this.state}
              total={this.countTotalStatistics()}
              positivePercentage={this.positivePercentage()} />
         </Section>
        
    </div>
  );
  }
};

export default App;