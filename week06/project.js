let input = document.querySelector('#add')
let btn = document.querySelector('#btn')
let task = document.querySelector('#task')
let newTask = document.getElementsByTagName('li')

btn.addEventListener('click',() => {
    let txt = input.value;
    if(txt === ""){
        alert('This field is required');

    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
    
})


task.addEventListener('click', e =>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})

