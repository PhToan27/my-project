function SortedPeople() {
    const people = [
      { name: "Alice", age: 25, occupation: "Developer" },
      { name: "Bob", age: 30, occupation: "Designer" },
      { name: "Charlie", age: 20, occupation: "Developer" },
      { name: "David", age: 22, occupation: "Designer" },
    ];
  
    const sortedPeople = [...people].sort((a, b) => {
      if (a.occupation < b.occupation) return -1;
      if (a.occupation > b.occupation) return 1;
      return a.age - b.age;
    });
  
    return (
      <div>
        <h2>Sorted People</h2>
        <ul>
          {sortedPeople.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} - {person.occupation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SortedPeople;
  