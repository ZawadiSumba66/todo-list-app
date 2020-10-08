const submit= document.querySelector('.submit');
const addInput=document.querySelector('#add');
const userList=document.querySelector('.user');
const clearList=document.querySelector('.clear');
const container=document.querySelector('.todo-container');
const filterOption=document.querySelector('#filter-todo');
const msg=document.querySelector('.msg')
submit.addEventListener('click',(e)=>{
    (e).preventDefault();
    //todo main div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    const header = document.createElement('div');
    header.innerHTML="<h5>the marked items have been completed</h5>";
    header.appendChild(todoDiv);
    //the added items
const li=document.createElement('li');
li.appendChild(document.createTextNode(addInput.value));
todoDiv.appendChild(li);
if(addInput.value===''){
    msg.innerHTML='Please add an item to the field below';
  msg.style.color='red';
  setTimeout(()=>msg.remove(),3000);
  todoDiv.remove(li);
  return false;
}
     // done button
     const check=document.createElement('input');    
     check.setAttribute("type","checkbox");
     check.classList.add('completed');
     todoDiv.appendChild(check);
     //delete button
const deleteButton=document.createElement('button');
deleteButton.innerHTML='<i class="fa fa-trash"></i>';
deleteButton.style.color='red';
todoDiv.appendChild(deleteButton);
deleteButton.addEventListener('click',(e)=>{
    (e).preventDefault();
    const trash=deleteButton.parentElement;
     trash.remove(); 
});
//append to the main list
userList.appendChild(todoDiv);
addInput.value="";
});
 clearList.addEventListener('click',(e)=>{
     (e).preventDefault();
     const todoDiv=document.createElement('div');
     todoDiv.classList.add('todo');
    userList.remove(todoDiv);
    addInput.value="";
 });
filterOption.addEventListener('click',(e)=>{
    (e).preventDefault();
    const todos=userList.childNodes;
    todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
         todo.style.display="flex";
         break;
         case "completed":
             if(todo.classList.contains('completed')){
                todo.style.display="flex";
             }else{
                todo.style.display="none";
             }
             break;
             case "uncompleted":
             if(todo.classList.contains('completed')){
                todo.style.display="flex";
             }else{
                todo.style.display="none";
             } 
    }
    })
});