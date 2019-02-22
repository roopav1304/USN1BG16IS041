/*var age=18;
if(age<13){
    console.log("minor");
}
else if(age>=18){
    console.log("major");
}
//con?true:false
age>=18?console.log("major"):console.log("minor");

function roopa(fname,lname){
    console.log(fname+' '+lname);
}

roopa("Roopashree","V");

var name=["r","o","o","p","a"];
//console.log(arr[0],arr[1],arr[2],arr[3],arr[4]);

//adding elements to array
name.push("s");
console.log(name);
name.unshift("h");
name.pop();
console.log(name);*/
//challenge-2

function calculator(amount){
    if(amount<50){
        tip=0.2*amount;
        return tip;
    }
    else if(amount>50 && amount<200){
        tip=0.15*amount;
        return tip;
    }
    else if(amount>200){
        tip=0.1*amount;
        return tip;
    }
}
bill[0]=calculator(124);
bill[1]=calculator(48);
bill[2]=calculator(268);
final_amount[0]=bill[0]+124;
final_amount[1]=bill[1]+48;
final_amount[2]=bill[2]+268;