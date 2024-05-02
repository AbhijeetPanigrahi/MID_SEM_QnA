/*
Write a JavaScript program that creates a class called University with properties for university name and departments. 
Include methods to add a department,remove a department, and display all departments.
Create an instance of the University class and add and remove departments.
*/

class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  addDepartment(departmentName) {
    this.departments.push(departmentName);
  }

  removeDepartment(departmentName) {
    const index = this.departments.indexOf(departmentName);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  displayDepartments() {
    console.log(`Departments of ${this.universityName}:`);
    this.departments.forEach((department, index) => {
      console.log(`${index + 1}. ${department}`);
    });
  }
}

// Create an instance of the University class
const myUniversity = new University("My University");

// Add departments
myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mathematics");
myUniversity.addDepartment("Physics");

// Display all departments
myUniversity.displayDepartments();

// Remove a department
myUniversity.removeDepartment("Mathematics");

// Display all departments after removal
myUniversity.displayDepartments();
