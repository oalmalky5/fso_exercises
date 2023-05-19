

const Persons = ({ persons, remove }) => {
  return (
    <div>
    <ul>
      {persons.map(person => 
        <li key={person.id}>
          {person.name}: {person.number} 
          <button onClick={() => remove(person)}> delete</button>
        </li>
      )}
    </ul>
    </div>
  )
}

export default Persons