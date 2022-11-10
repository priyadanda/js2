// Declare and initialise an array with 5 names and ages 
var students = [
   [201,"Mary", 40],
   [202,"Barbara", 31],
   [203,"David", 22],
   [204,"Alex", 35] ,
   [205,"Sue", 24]
 ];
 
 console.log(students.toString());

// log length of the array
console.log(students.length);

// log the last element 
console.log(students[students.length-1]);

// add john to array
students.push(206,"John",45);
console.log(students.toString());

// remove the first item from the array
var removedStudent = students.shift();
//console.log(students.toString());
console.log(removedStudent);

// first challenge
for (i=0; i < students.length; i++) {
  // as we loop through the students array, we loop through each nested student array item
  for (j=0; j<students[i].length; j++) {
    // we check each item in the nested students array until we find one that matches our id
    if (students[i][j] === 205) {
      // we check inside this nested student array item to find the position of the index of Sue
      let position = students[i].indexOf("Sue");
      // when we find the index and store it in position, we can now use it to target and change Sue to Susan
      students[i][position] = "Susan";
    }
  }
}

console.log(students);