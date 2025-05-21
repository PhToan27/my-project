const employees = [
    { id: 1, name: "Anna", department: "HR" },
    { id: 2, name: "Brian", department: "IT" },
    { id: 3, name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];
  
  export default function Exercise8() {
    const grouped = employees.reduce((acc, emp) => {
      const dept = emp.department;
      if (!acc[dept]) acc[dept] = [];
      acc[dept].push(emp);
      return acc;
    }, {});
  
    return (
      <div>
        {Object.entries(grouped).map(([dept, emps]) => (
          <div key={dept}>
            <h3>{dept}</h3>
            <ul>
              {emps.map((emp, index) => (
                <li key={emp.id || index}>{emp.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  