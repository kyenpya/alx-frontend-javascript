export default function createIteratorObject(report) {
  const allEmployees = [];

  // Gather all employees from each department
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }
  // Return an iterator for the combined array of employees
  return allEmployees[Symbol.iterator]();
}
