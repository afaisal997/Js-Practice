let emp = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@gmail.com",
  dsg: "Developer",
  address: "South Delhi",
  set setsalary(num) {
    this.salary = num;
  },
  get getData() {
    console.log(`
        ID:             ${this.id}
        Name:           ${this.name}
        Age:            ${this.age}
        Email:          ${this.email}
        Designation:    ${this.dsg}
        Salary:         ${this.salary}
        `);
  },
};
emp.setsalary = 20000;
emp.getData;
