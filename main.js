function getToDoText() {
  //TODO:: replace with user's typed in text.
  return document.querySelector('#newItemText').value
}

function createNewTodoElem(newItemText) {
  // create DOM createElement
  let newElem = document.createElement('li');
  //add item text
  newElem.innerText = newItemText;
  //return appended child on ul parent node.
  return document.querySelector('ul').appendChild(newElem)
}

document.querySelector('#newItem').addEventListener('submit', (evt) =>{
  evt.preventDefault();
  // tempTEST:::console.log('clap clap clap')
  // get text that is typed in
  let itemText = getToDoText();

  let newToDo = createNewTodoElem(itemText)

  // create button as child of li
  let thisNewButton = function createNewButton() {
    return document.createElement('button').addEventListener('click', killParentAndChild())
  }

  newTodo.appendChild(thisNewButton)

  console.log(thisNewButton)
})

//function that returns new button




//function that deletes child and parent
function killParentAndChild(aButton) {
  let thisButton = event.target
  let thisParent = thisButton.parentNode
  let thisGrParent = thisParent.parentNode

  //removes button of li
  thisParent.removeChild
  //removes li of ul
  thisGrParent.removeChild
}



//function that appendsChild to parent todoList



//
// let inputtedThing = useAFunctionIDontKNow.createElement('li')
// document.querySelector('body').appendChild(inputtedThing)
