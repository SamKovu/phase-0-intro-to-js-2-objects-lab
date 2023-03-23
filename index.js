const employee = {
    name: "Sam",
    streetAddress:"Eluid",
};



function updateEmployeeWithKeyAndValue(employee, key, value){
const tempOb ={...employee};
tempOb[key]=value;
return tempOb;
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
employee[key]=value;
return employee;
}


function deleteFromEmployeeByKey(employee,key){

let temp ={...employee};
delete temp[key];
return temp

}

function destructivelyDeleteFromEmployeeByKey(employee,key){ 
    delete employee[key];
    return employee;
     
    }