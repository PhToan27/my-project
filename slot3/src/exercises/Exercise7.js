const employees = [
    { id: 1, name: "Anna", department: "HR" },
    { id: 2, name: "Brian", department: "IT" },
    { id: 3, name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];
  
  export default function Exercise7() {
    const sortedEmployees = [...employees].sort((a, b) => {
      const deptCompare = a.department.localeCompare(b.department);
      return deptCompare !== 0
        ? deptCompare
        : a.name.localeCompare(b.name);
    });
  
    return (
      <ul>
        {sortedEmployees.map((emp, index) => (
          <li key={emp.id || index}>{emp.name} - {emp.department}</li>
        ))}
      </ul>
    );
  }
  