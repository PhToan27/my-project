function FirstTeenager() {
    const people = [
      { name: "Alice", age: 25, occupation: "Developer" },
      { name: "Bob", age: 16, occupation: "Student" },
      { name: "Charlie", age: 20, occupation: "Student" },
    ];
  
    const teenager = people.find((p) => p.age >= 13 && p.age <= 19);
  
    return (
      <div>
        <h2>First Teenager</h2>
        {teenager ? (
          <p>{teenager.name} - {teenager.age}</p>
        ) : (
          <p>No teenager found</p>
        )}
      </div>
    );
  }
  
  export default FirstTeenager;
  