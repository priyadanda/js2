// 1. a) Declare and initialise an array with the below 5 names and ages (hint: each array item will be its own array like [[202, "Barbara", 31], ...])
//  i. 202,"Barbara", 31
//  ii. 203,"David", 22
//  iii. 204,"Alex", 35
//  iv. 205,"Sue", 24
// b) Log the length of the array
// c) Log the last element in the array
// d) Add John who is 45 years old with id 206 to the end of the array (on a new line, without just writing it into the initial array)
// e) Remove the first item from the array (on a new line, without just going up above and editing the code of the initial array)


// Come back to challenges if rest of work is all complete
// Challenge - Use a for loop through the array to search for ID = 205 and update Sue’s name to Susan
// Challenge - Remove an item from the middle of the array. ID=204

var students = [
   [201,"Mary", 40],
   [202,"Barbara", 31],
   [203,"David", 22],
   [204,"Alex", 35] ,
   [205,"Sue", 24]
 ];
 
 console.log(students.toString());


console.log(students.length);


console.log(students[students.length-1]);

students.push(206,"John",45);
console.log(students.toString());


var removedStudent = students.shift();
console.log(students.toString());
console.log(removedStudent);


for (i=0; i < students.length; i++) {
  
  for (j=0; j<students[i].length; j++) {
    
    if (students[i][j] === 205) {
     
      let position = students[i].indexOf("Sue");
      
      students[i][position] = "Susan";
    }
  }
}

console.log(students);