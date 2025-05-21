const employees = [
    { age: 50 },
    { age: 40 },
    { age: 19 },
    { age: 22 },
    { age: 16 }
  ];
  
  export default function Exercise9() {
    const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);
    return <p>Is there a teenager? {isTeenager ? "Yes" : "No"}</p>;
  }
  