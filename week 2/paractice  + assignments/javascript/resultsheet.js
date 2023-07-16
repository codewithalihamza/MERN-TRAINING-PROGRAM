console.log("------------------------------Mark Sheet-------------------------------");
console.log("-----------------Board of Intermidiate College Bhawana-----------------");
console.log("-------------------Provisional Result Card-----------------------------");
console.log("------Intermidiate Part first and second Annual Examination,2018-------");
console.log("                       ");
console.log("Name: Ali Hamza");
console.log("Registration No: 39829 38290 382938");
console.log("Roll No: 0000");
console.log("Son of: Syed Munawar Hussain");
console.log("Institution: Pearls international College Bhawana");
console.log("The oveall marks obtained by the candidate");
console.log("-------------------------------------------------------------");
console.log(" NO " + "|" + "         Subject         " + "|" + " Maximum Marks " + "|" + " Obtain Marks ");
console.log("-------------------------------------------------------------");
console.log(" 1 " + "|" + "            Math          " + "|" + "     200    " + "|" + "       190    ");
console.log(" 2 " + "|" + "         Chemistry        " + "|" + "     200    " + "|" + "       160    ");
console.log(" 3 " + "|" + "          Physics         " + "|" + "     200    " + "|" + "       170    ");
console.log(" 4 " + "|" + "          English         " + "|" + "     200    " + "|" + "       180    ");
console.log(" 5 " + "|" + "            Urdu          " + "|" + "     200    " + "|" + "       190    ");
console.log(" 6 " + "|" + "       Islamic Studies    " + "|" + "     100    " + "|" + "        80    ");
console.log("-------------------------------------------------------------");
var sum=190+160+170+180+190+80;


// This method is a javascripts ternary operator which is using instead of if else condition
//var grade = (sum>=990) ? "and you get A Grade" : (sum>=880) ? "and you get B Garade" : (sum>=770) ? "and you get C Grade" : "and you are fail";


if(sum>=990)
{
    var a ="and you get A Grade";
}else if(sum>=880){
    var a="and you get B Grade";
}else if(sum>=750){
    var a = "and you get C Grade";
}else{
    var a = "and you are Fail";
}

console.log("The Candidate Secured " + sum + "/1100 " + a);

