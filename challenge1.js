//intoduce the function
function outputGrade(score){
if (score < 0 || score > 100) {
   //alert message incase they input a number <0 or >100
    console.log("Invalid input! Please check your entry.");
    return;
}
//determine the grade
let  grade;
if (score>79) {
    grade="A";
}else if (score >= 60) {
    grade="B";
} else if (score >= 49) {
    grade="C";
}else if (score >= 40) {
    grade="D";
}else {
    grade="E";
}
return grade;
}
//call function
console.log(outputGrade(65))
  