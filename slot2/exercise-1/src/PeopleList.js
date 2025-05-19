function PeopleList() {
    const people = [
      { name: "Alice", age: 25, occupation: "Developer" },
      { name: "Bob", age: 30, occupation: "Designer" },
      { name: "Charlie", age: 20, occupation: "Student" },
    ];
  
    return (
      <div>
        <h2>People List</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} - {person.occupation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PeopleList;
  