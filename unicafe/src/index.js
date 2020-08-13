import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => {
  return(
    <button onClick = {handleClick}> 
      {text}
      </button>
  )
  

} 
const Statistic = ({text, value}) =>{
  return(
    <div>
      {text}{value}
    </div>
  )

}
const Stats = ({stats, good, neutral, bad, total, average, positive}) => {
  if (total === 0){
    return(
      <>
      <br></br>
        No feedback given
      </>
    )
  }
  return(
    <div>
      <h1>{stats}</h1>
      <table>
        <tbody>
        <Statistic text = "good" value = {good}/>
        <Statistic text = "neutral" value = {neutral}/>
        <Statistic text = "bad" value = {bad}/>
        <Statistic text = "total" value = {total}/>
        <Statistic text = "average" value = {average}/>
        <Statistic text = "positive" value = {positive +"%"}/>
        </tbody>
      </table>
    </div>
  )
}


  
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const stats = "statistics"
  let total = good+neutral+bad
  let positive = good/total
  let average = (good-bad)/total
  return (
    <div>
      <Display title = {title} />
      <Button handleClick = {() => setGood(good => good+1)} text="good"/>
      <Button handleClick = {() => setNeutral(neutral => neutral+1)} text="neutral"/>
      <Button handleClick = {() => setBad(bad => bad+1)} text="bad"/>
      <Stats stats = {stats} good={good} neutral = {neutral} bad = {bad} total ={total} positive = {positive} average = {average} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)