
import Stats from './components/Stats'
import Buttons from './components/Buttons'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;

  const average = total === 0 ? 0 : (good - bad) / total;

  const positivePercentage = total === 0 ? 0 : (good / total) * 100;


  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Buttons handleGood={handleGood} handleBad={handleBad} handleNeutral={handleNeutral}/>
      <h1>Statistics</h1>
      {total === 0 ? <h3>No feedback given</h3> : 
        <Stats 
          good={good} 
          bad={bad} 
          neutral={neutral} 
          total={total} 
          average={average} 
          positive={positivePercentage}
        />}
    </div>
  )
}

export default App
