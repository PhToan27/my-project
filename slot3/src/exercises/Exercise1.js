const employee = { name: "John Doe", age: 30, department: "IT" };

export default function Exercise1() {
  const { name, age, department } = employee;
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}
