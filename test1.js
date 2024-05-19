var studetns = ["Usman","Ali","Noman"];
//students[5]= "Zeeshan";
//let searchstudents = studetns.findIndex(findAli);
studetns.sort();
console.log(studetns[4]);
function findAli(std){
    if(std== "Ali")return true;
    else return false;
}