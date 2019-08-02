// creates new ToDo new element
function createNewTodoElem() {
    //create DOM element: li
    let newElem1 = document.createElement('li');
    //change new li node to have innerHTML of the text input from the form

    let newSpan = document.createElement('span')
    newSpan.textContent = document.querySelector('#newItemText').value;
    newSpan.addEventListener('click', getInputFromUser)

    newElem1.appendChild(newSpan)
    // create button as child of li and append
    newElem1.appendChild(createNewButton())
    //append complete aButton
    newElem1.appendChild(createCompleteButton())

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

//create function that strikes through li.span.innerHTML
function strikeThrough () {
  event.target.parentElement.querySelector('span').style.textDecoration = 'line-through'
}

//gets input from user
function getInputFromUser() {
  event.target.innerText = window.prompt('Change todo item: ')
}
