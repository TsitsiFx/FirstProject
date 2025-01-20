const toDoList = [
 /* {
    name: 'Learn Piano',
    dueDate: '2022-12-22'
  },
  {
    name: 'Play Guitar',
    dueDate: '2024-11-19'

  }
  */
]



function renderTodoList() {
  let toDoListHtml = ''

 
  for (let i = 0; i < toDoList.length; i++) {
    let todoObject = toDoList[i];
    const { name, dueDate } = todoObject;
      const html = `
        <div> 
          ${name}
        </div>  
        <div>
          ${dueDate}
        </div>
        <div>
          <button 
          class="delete-todo-button"
          onclick="
          toDoList.splice(${i},1);
          renderTodoList();">Delete</button>
         </div>
      `
      if (dueDate === ''){
        dueDate === '2024-11-19'   
       console.log('no date bruh')
      }
      else {
       dueDate === '2024-11-19'
      }
     
    toDoListHtml += html
 
  }

  document.querySelector('.js-display-list')
    .innerHTML = toDoListHtml;
}
function addList() {
  const inputElement = document.        querySelector('.js-input');

  const name = inputElement.value;
 
  const inputDate = document.querySelector  ('.js-date')
 const dueDate = inputDate.value;

  toDoList.push(
  {
  // name: name,
    //dueDate: dueDate
    name,
    dueDate
  }
);

  inputElement.value = '';

  renderTodoList(); 
}






