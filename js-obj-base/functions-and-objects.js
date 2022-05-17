
//1
function getName(obj) {
    return obj.name
}



//2
function getNames (person) {
    return person
}
console.log(getNames( ['Akhmad', 'Kuduzow']));




//3
function concatNames (obj, lastname) {
    return obj.firstname + lastname
}

const obj = {

  firstname: 'Alvi',
  age:22
};

console.log(concatNames(obj,'Tsugaev')); 




//4
function currentName (obj) {
    if (fathername === undefined) {
        return obj.firstname
    }
    else {
return `${firstname}`+`${lastname}`+`${fatharname}`
    }
}
