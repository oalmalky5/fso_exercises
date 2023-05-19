
import Part from "./Part"

const Content = ({ course }) => {

  
  return (
    <div>
      {course.parts.map((item) => (
        <Part key={item.id} name={item.name} exercises={item.exercises}/>
      ))}
    </div>
  )
}

export default Content