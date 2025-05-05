let Emp = function (id, name, dsg, salary, city, state) {
  this.id = id;
  this.name = name;
  this.dsg = dsg;
  this.salary = salary;
  this.city = city;
  this.state = state;
};

const emp1 = new Emp(10, "John", "Trainer", 21000, "NOida", "UP");
const emp2 = new Emp(
  11,
  "Lenon",
  "DevOps Engineer",
  79000,
  "Nehru Place",
  "New Delhi"
);
const emp3 = new Emp(
  12,
  "Cooper",
  "Network Engineer",
  43000,
  "Bengaluru",
  "Karnataka"
);
const emp4 = new Emp(
  13,
  "Sheldon",
  "Developer",
  67000,
  "Mumbai",
  "Maharashtra"
);
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
