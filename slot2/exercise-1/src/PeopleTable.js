function PeopleTable() {
    const people = [
      { name: "Alice", age: 25, occupation: "Developer" },
      { name: "Bob", age: 30, occupation: "Designer" },
      { name: "Charlie", age: 20, occupation: "Student" },
    ];
  
    return (
      <div>
        <h2>People Table</h2>
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default PeopleTable;
  