//pass by value
/*let x = 10;
let y = x;
x = 20;
console.log(y);*/

//pass by reference
let x={value:10};
let y = x;
x.value= 20;
console.log(y);



/*let searchstudents = students.find(findAli);
students[5]= "Zeeshan";
students.sort();
console.log(searchstudents);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
}*/


var students = ["Usman","Ali","Noman"];
students.splice(1,0,...["Zahid","Anwar"])
console.log(...students);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
}

