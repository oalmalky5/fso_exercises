import StatLine from "./StatLine"

const Stats = (props) => {
  return (
    <table>
      <tbody>
        <StatLine text="Good" value={props.good}/>
        <StatLine text="Neutral" value={props.neutral}/>
        <StatLine text="Bad" value={props.bad}/>
        <StatLine text="All" value={props.total}/>
        <StatLine text="Average" value={props.average}/>
        <StatLine text="Positive" value={props.positive}/>
      </tbody>
    </table>
  )
}

export default Stats




