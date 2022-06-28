// JavaScript Document

// element by id
// var foundYou = document.getElementById('overview');
// console.log(foundYou)
// console.log(foundYou.innerText)
// foundYou.innerHTML = ">>I changed you<<" // allows you to change HTML from the js file


// element by tag name
// var foundYou = document.getElementsByTagName('p')
// console.log(foundYou)
// console.log(foundYou[1].innerText)
// foundYou[1].innerText = "..I changed you"


// element by name
// var foundYou = document.getElementsByName('description')
// console.log(foundYou[0].innerHTML)
// foundYou[0].innerHTML = "I changedYou"


// element by class name
// var foundYou = document.getElementsByClassName('smallCenter')
// console.log(foundYou[0].innerText)
// foundYou[0].innerText = "<<New paragraph info"



// query selector all
// var foundYou = document.querySelectorAll('ul#lp_list li')
// console.log(foundYou[0].innerText)
// console.log('LENGTH OF COLLECTION >> '+foundYou.length)
// foundYou[2].innerText = "<I channged you"


// // switch statement of inner text statement
// var foundYou = document.getElementById('sw_list');
// console.log(foundYou)
// var childArray = foundYou.getElementsByTagName('li')
// console.log(childArray)
// childArray[0].innerText = ">>These items";
// childArray[1].innerText = ">>Have just";
// childArray[2].innerText = ">>Been changed";



// var newOptions = ["orange", "red", "blue"];

// var foundYou = document.getElementById('myForm')
// console.log(foundYou)

// var selectArray = foundYou.getElementsByTagName('option')
// console.log(selectArray)

// for (i=0; i<selectArray.length; i++) {
//     selectArray[i].innerText = newOptions[i]
// }



var foundYou = document.getElementById('myForm')
console.log(foundYou)

var selectArray = foundYou.getElementsByTagName('input')
console.log(selectArray)

for (i=0; i<selectArray.length; i++) {
    console.log(selectArray[i].value)
}
