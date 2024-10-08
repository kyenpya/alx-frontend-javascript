/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
import { Subjects } from "./subjects/Subject";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

// Constants for subjects
const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

// Teacher object with experience
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Logging and executing methods for Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Logging and executing methods for Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Logging and executing methods for React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());