

let input =document.getElementById("add")
let btn = document.getElementById("btn")
let task = document.getElementById("task")

btn.addEventListener('click', () =>{
    let list = input.value;
    if(list === ""){
        alert('This field is required');

    }else{
        let text = document.createElement('li');
        text.innerText = list;
        task.appendChild(text)
        input.value = '';
    }
    
})  

task.addEventListener('click', myTask => {
    const element = myTask.target
    if (element.style.getPropertyValue('text-decoration') == 'line-through') {
        element.style.setProperty('text-decoration', 'none')
    } else {
        element.style.setProperty('text-decoration', 'line-through')
    }
})


task.addEventListener('dblclick', myTask => {
    myTask.target.remove()
    
   
    

})

