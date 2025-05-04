let emp = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@gmail.com",
  dsg: "Developer",
  basic_salary: 50000,
  calculation() {
    this.ta = (this.basic_salary * 5) / 100;
    this.da = (this.basic_salary * 8) / 100;
    this.hra = (this.basic_salary * 10) / 100;
    this.ma = (this.basic_salary * 7) / 100;
    this.gross_salary =
      this.basic_salary + this.ta + this.da + this.hra + this.ma;
    this.itr = (this.gross_salary * 10) / 100;
    this.net_salary = this.gross_salary - this.itr;
  },
  display() {
    console.log("Employee Details:");
    console.log(`
        ID:             ${this.id}
        Name:           ${this.name}
        Age:            ${this.age}
        Email:          ${this.email}
        Designation:    ${this.dsg}
        Basic Salary:   ${this.basic_salary}
        TA:             ${this.ta}
        DA:             ${this.da}
        HRA:            ${this.hra}
        MA:             ${this.ma}
        Gross Salary:   ${this.gross_salary}
        ITR:            ${this.itr}
        Net Salary:     ${this.net_salary}

        `);
  },
  address: "South Delhi",
};

emp.calculation();
emp.display();
