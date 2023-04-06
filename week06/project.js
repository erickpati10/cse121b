
let todoList = [];
let input =document.getElementById("add")
let btn = document.getElementById("btn")

btn.addEventListener('click', () =>{
    let inputValue = input.value;
    if(inputValue === ""){
        alert('This field is required');

    }else{
        todoList.push(inputValue);
        todoList.sort();

        renderTodos();
        input.value = '';

    
    }
})  

function renderTodos() {
    let unorderListContainer = document.querySelector(".list")

    unorderListContainer.innerHTML = '';

    for(let i = 0; i< todoList.length; i++) {
        const todo = todoList[i];
        const listElement = getListElement(todo, i);

        unorderListContainer.appendChild(listElement)
    }
}

function getListElement(todo, index) {
    let liElement = document.createElement('li');
    
    addClickEventsToListElement(liElement, index);

    
    let span2 = document.createElement("span");
    span2.innerHTML = todo;
    
    liElement.appendChild(span2);

    return liElement;
}

function addClickEventsToListElement(listElement, index) {
    listElement.addEventListener('click', event => {
        if (listElement.style.getPropertyValue('text-decoration') == 'line-through') {
            listElement.style.setProperty('text-decoration', 'none')
        } else {
            listElement.style.setProperty('text-decoration', 'line-through')
        }
    })

    
    listElement.addEventListener('dblclick', event => {
        event.target.remove()
        todoList.splice(index, index + 1)
    })
}

