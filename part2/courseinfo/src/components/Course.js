
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = ({ courses }) => {
  
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header  courseName={course.name}/>
          <Content course={course} />
          <Total course={course}/>
        </div>
      ))}
    </div>
  )
}

export default Course