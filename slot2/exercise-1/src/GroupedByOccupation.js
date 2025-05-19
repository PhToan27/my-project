function GroupedByOccupation() {
    const people = [
      { name: "Alice", age: 25, occupation: "Developer" },
      { name: "Bob", age: 30, occupation: "Designer" },
      { name: "Charlie", age: 20, occupation: "Developer" },
      { name: "David", age: 22, occupation: "Designer" },
    ];
  
    const grouped = people.reduce((acc, person) => {
      if (!acc[person.occupation]) {
        acc[person.occupation] = [];
      }
      acc[person.occupation].push(person);
      return acc;
    }, {});
  
    return (
      <div>
        <h2>Grouped by Occupation</h2>
        {Object.keys(grouped).map((occupation) => (
          <div key={occupation}>
            <h3>{occupation}</h3>
            <ul>
              {grouped[occupation].map((p, i) => (
                <li key={i}>
                  {p.name} - {p.age}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default GroupedByOccupation;
  