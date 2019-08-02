// creates new ToDo new element
function createNewTodoElem() {
    //create DOM element: li
    let newElem1 = document.createElement('li');
    //change new li node to have innerHTML of the text input from the form
    let testElem = document.querySelectorAll('li');
    console.log(testElem)

    // console.log(testElem.childNodes.wholeText)

    newElem1.innerHTML = document.querySelector('#newItemText').value;
    // create button as child of li and append
    newElem1.appendChild(createNewButton())
    //append complete aButton
    newElem1.appendChild(createCompleteButton())
    newElem1.addEventListener('click', getInputFromUser)
    //return new Item
    return newElem1;
}
function addTodoItem(event) {
    event.preventDefault();
    //append li element ul
    document.querySelector('ul').appendChild(createNewTodoElem());
}
function createNewButton() {
  let newButton = document.createElement('button')
  newButton.innerText = 'DELETE'
  newButton.addEventListener('click', killParentAndChild)
  return newButton
}
//create condition to run addTodoItem on submit of form id: newItem
document.querySelector('#newItem').addEventListener('submit', addTodoItem)
//function that deletes child and parent
function killParentAndChild(event) {
  let thisButton = event.target
  let thisParent = thisButton.parentNode
  let thisGrParent = thisParent.parentNode
  //removes button of li
  thisParent.removeChild(thisButton)
  //removes li of ul
  thisGrParent.removeChild(thisParent)
}

//create complete button
function createCompleteButton() {
  let newComplete = document.createElement('button')
  newComplete.innerText = 'COMPLETE'
  newComplete.addEventListener('click', strikeThrough)
  return newComplete
}

//create function that strikes through li.innerHTML
function strikeThrough () {
  event.target.parentElement.style.textDecoration = 'line-through'
}
// TO DO :::::
// create click event for li node to edit text
// listen for click on li

// on click prompt user for input

// take input store into li.innerText
//
// function listenForClick(listItem) {
//     listItem.addEventListener('click', getInputFromUser)
// }

function getInputFromUser() {
  return window.prompt('Change todo item: ')
}
