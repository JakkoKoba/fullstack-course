const Course = ({ course }) => {
  const array = course.parts
  const totalExercises = array.reduce(
    (sum, part) => sum + part.exercises, 
    0
  )

  return (
    <>
      <CourseName course={course} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </>
  )
}

const CourseName = ({ course }) => <h2>{course.name}</h2>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ total }) => <p><b>Number of exercises {total}</b></p>

export default Course