"use strict";

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let tableHtml = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Посада</th>
                        <th>Зарплата</th>
                    </tr>
                </thead>
                <tbody>
        `;

    for (const employee of this.employees) {
      tableHtml += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
    }

    tableHtml += `
                </tbody>
            </table>
        `;

    return tableHtml;
  }
}

const employees = [
  new Employee("Олександр Іваненко", "Frontend Developer", "1500$"),
  new Employee("Марія Петрівна", "Backend Developer", "1600$"),
  new Employee("Дмитро Сидоренко", "DevOps Engineer", "1800$"),
  new Employee("Анна Коваленко", "UI/UX Designer", "1400$"),
  new Employee("Іван Грищенко", "QA Engineer", "1200$"),
  new Employee("Сергій Бондаренко", "Data Scientist", "1900$"),
  new Employee("Олена Соловйова", "Project Manager", "2000$"),
  new Employee("Катерина Левченко", "Software Architect", "2200$"),
  new Employee("Андрій Ткаченко", "Mobile Developer", "1700$"),
  new Employee("Наталія Романова", "Business Analyst", "1600$"),
];

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());
