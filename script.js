// Naomi Ifergan
// CART 451 - Term Project
// Title: The Land Of Eden: The Land Of A Billion Minds

// sources:
// background image: https://wallpaperaccess.com/futuristic-house
//https://codingartistweb.com/2021/12/autocomplete-suggestions-on-input-field-with-javascript/

//
//
// let answers = [ //I will be adding more data as I go. (currently asking people for answers)
// "no racism",
// "no antisemitism",
// "no violence",
// "renewable source energy",
// "more green spaces",
// "gender equality",
// "no animal abuse",
// "vegan living",
// "no discrimination",
// "no war",
// "no hate crime",
// "sustainable living",
// "more handicap access",
// ];
//
//
// let sortedAnswers = answers.sort();
// let input = document.getElementById("input");
//
//
// //Execute function on keyup
// input.addEventListener("keyup", (e) => {
//   //loop through above array
//   //Initially remove all elements (so if user erases a letter or adds new letter then clean previous outputs)
//   removeElements();
//   for (let i of sortedAnswers) {
//     //convert input to lowercase and compare with each string
//
//     if (
//       i.toLowerCase().startsWith(input.value.toLowerCase()) &&
//       input.value != ""
//     ) {
//       //create list element
//       let listItem = document.createElement("li");
//       listItem.classList.add("list-items");
//       listItem.style.cursor = "pointer";
//       listItem.setAttribute("onclick", "displayAnswers('" + i + "')");
//
//       //Display matched part in bold
//       let word = "<b>" + i.substr(0, input.value.length) + "</b>";
//       word += i.substr(input.value.length);
//       //display the value in array
//       listItem.innerHTML = word;
//       document.querySelector(".list").appendChild(listItem);
//     }
//   }
// });
// function displayAnswers(value) {
//   input.value = value;
//   removeElements();
// }
// function removeElements() {
//   //clear all the item
//   let items = document.querySelectorAll(".list-items");
//   items.forEach((item) => {
//     item.remove();
//   });
// }
