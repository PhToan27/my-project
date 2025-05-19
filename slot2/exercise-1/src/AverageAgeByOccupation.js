function AverageAgeByOccupation() {
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
      acc[person.occupation].push(person.age);
      return acc;
    }, {});
  
    return (
      <div>
        <h2>Average Age by Occupation</h2>
        <ul>
          {Object.entries(grouped).map(([occupation, ages]) => {
            const avg = (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(2);
            return (
              <li key={occupation}>
                {occupation}: {avg} years
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default AverageAgeByOccupation;
  