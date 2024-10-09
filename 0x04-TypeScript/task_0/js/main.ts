// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table'); // Create table element
const tbody = document.createElement('tbody'); // Create tbody element

// Create table header
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tbody.appendChild(headerRow);

// Append student data to the table
studentsList.forEach((student) => {
  const row = document.createElement('tr'); // Create a row for each student

  // First Name cell
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName; // Set first name
  row.appendChild(firstNameCell); // Append cell to the row

  // Location cell
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location; // Set location
  row.appendChild(locationCell); // Append cell to the row

  // Append the row to tbody
  tbody.appendChild(row);
});

// Append tbody to the table
table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);
