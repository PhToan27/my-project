const employees = [
    { age: 50 },
    { age: 40 },
    { age: 19 },
    { age: 22 },
    { age: 16 }
  ];
  
  const averageAge = (...ages) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    return (total / ages.length).toFixed(2);
  };
  
  export default function Exercise4() {
    const ages = employees.map(e => e.age);
    return <p>Average Age: {averageAge(...ages)}</p>;
  }
  