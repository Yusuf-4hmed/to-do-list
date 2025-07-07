const toDoInput = document.getElementById('to-do-input');
const addButton = document.getElementById('add-button');
const toDoListContainer = document.getElementById('to-do-list-container')

const addToDo = () => {
    toDoListContainer.innerHTML += `<li class="to-do">${toDoInput.value} <p class="delete">x</p></li>`;
    toDoInput.value = '';
    saveToDo()
}

addButton.addEventListener('click', addToDo)

toDoListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')){
           e.target.parentElement.remove() 
        }
        saveToDo()
    });

toDoListContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('to-do')) {
        e.target.classList.toggle('done')
    }
})

saveToDo = () => {
   localStorage.setItem('toDoData', toDoListContainer.innerHTML) 
} 

loadToDo = () => {
    toDoListContainer.innerHTML = localStorage.getItem('toDoData')
}

loadToDo()

