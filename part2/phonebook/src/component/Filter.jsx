

const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      seach name: <input value={searchTerm} onChange={handleSearchChange}/>
    </div>
  )
}

export default Filter