let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

  console.log("Heere's Jeff: ", `Our company's lawyer is ${employee.name}`)
  console.log("Bracket Notation: ", "Our company's lawyer is " + employee.name)
  console.log(`Jeff was hired on ${employee.hire_date}`)

  employee["vacation_days"] = 20;
  employee.vacation_days = 25;

  let eom = "employee_of_the_month";

  employee[eom] = false;

  console.log(employee)
