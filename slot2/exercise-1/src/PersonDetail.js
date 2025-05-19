function PersonDetail() {
  const person = {
    name: "Alice",
    age: 25,
    occupation: "Developer"
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
