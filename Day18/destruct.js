let emp = {
  id: 12,
  name: "John",
  dsg: "Developer",
  salary: 12000,
  city: "noida",
  state: "up",
};

let { id, name, dsg, salary, city, state } = emp;
console.log(`
    ID          : ${id}
    Name        : ${name}
    Designation : ${dsg}
    Salary      : ${salary}
    City        : ${city}
    State       : ${state}
    `);
