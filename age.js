
function show_calculator(){
    document.getElementById('ageCalculator').style.display='block';                
    document.getElementById('click').style.display='none';  
    document.getElementById('heading').style.display='block';                

}





function age_calculator(){
let dob1=document.getElementById("dob").value;
    let date1 = new Date();
    let date =new Date(dob1);
    
    let age=date1.getFullYear()-date.getFullYear();


document.getElementById('result').style.display='block';


     if(age<0){
    alert(document.getElementById("result").innerHTML="please select a valid date!")
    }
    else if(age>0){
    document.getElementById("result").innerHTML=`Your age is:${age}`
    }
    
}
age_calculator();






























