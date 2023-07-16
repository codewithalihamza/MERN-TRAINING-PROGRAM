let age=prompt();
if(age>=18){
    document.write("This is a 18+");
    if(age>=18){
        document.write("you are eligible for CNIC")
    }

}
else if(age<18){
    document.write("you are not eligiblal for cnic");
    if(age<=12){
        document.write("you are child");
    }
}
else{
    document.write("hello world")
}