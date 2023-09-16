const todoList= [

];

renderTodoList();

function addTodo(){
    const inputElement= document.querySelector('.js-input');
    const dateInputElement=document.querySelector('.js-date-input');

    const name=inputElement.value;
    const dueDate=dateInputElement.value;

    if(!name || !dueDate) return;
    todoList.push({
        // name:name,
        // dueDate: dueDate    below line is shorthand
        name,dueDate
    });

    // console.log(todoList);
    
    inputElement.value='';
    
    renderTodoList();
}

function renderTodoList(){
    let todoListHTML='';
console.log(todoList.length);
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        // const name=todoObject.name;
        // const dueDate=todoObject.dueDate;      instead we can use below shorthand code
        const {name,dueDate}=todoObject;
        const html=`
            <div>${name}</div>
            <div>${dueDate}</div>
                
            <button class="delete-btn" onclick="
                todoList.splice(${i},1);
                renderTodoList();
            ">Delete</button>
            
        `; //generating html
      
        todoListHTML+=html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-container').innerHTML=todoListHTML;
}
