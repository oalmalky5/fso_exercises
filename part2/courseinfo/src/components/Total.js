


const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, val) => acc + val.exercises, 0)
  return (
    <div>
      <h4>Number of exercises {sum}</h4>
    </div>
  )
}

export default Total