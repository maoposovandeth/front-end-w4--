// THE CONTEXT
// In the provided code, there's an array named students, containing objects representing students with their IDs, names, and grades.
// There's a function named updateStudentGrade that takes three parameters:
//      studentsArray (the array of students)
//      idToUpdate (the ID of the student to update)
//       newGrade (the new grade to assign to the student).

// YOUR JOB
// Your task is to complete the updateStudentGrade function, following the  steps

let students = [
  { id: 1, name: "Trang", grade: "A" },
  { id: 2, name: "Hai", grade: "B" },
  { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
  // Step 1: Use findIndex to find the position of the student
  const indexToUpdate = studentsArray.findIndex(student => student.id === idToUpdate);

  if (indexToUpdate !== -1) {
    // Step 2: Create a copy of the original array using the spread operator
    const updatedArray = [...studentsArray];

    // Step 3: Update the grade in the copied array
    // We also use spread here to copy the student object and just change the grade
    updatedArray[indexToUpdate] = { ...updatedArray[indexToUpdate], grade: newGrade };
    
    return updatedArray;
  } else {
    // Step 4: If not found, log a message and return original array unchanged
    console.log("Student with ID " + idToUpdate + " was not found.");
    return studentsArray;
  }
}

// Original array of students
console.log("Original students array:");
console.log(students);

// Update the grade of the student with ID 2 to "A"
let updatedStudents = updateStudentGrade(students, 2, "A");

// Updated array of students
console.log("\nUpdated students array:");
console.log(updatedStudents);

// Optional: Checking if the original array stayed the same (Immutability check)
console.log("\nIs the original array still 'B' for Hai?", students[1].grade === "B");