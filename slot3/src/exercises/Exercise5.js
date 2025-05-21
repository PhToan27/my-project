const employees = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Brian" },
    { id: 3, name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" }
  ];
  
  export default function Exercise5() {
    return (
      <select>
        {employees.map((emp, index) => (
          <option key={emp.id || index}>{emp.name}</option>
        ))}
      </select>
    );
  }
  