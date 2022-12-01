import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-do App';
}


/*function addTodo(task){
    let element=document.createElement('div');
    element.innerText=task;
    document.body.appendChild(element)
}
addTodo('Get groceries')
addTodo('Wash car')
addTodo('Make dinner') EASY WAY OF GETTING THESE TASK TO TEXT BOX. A BETTER WAY IS BELOW*/

/*

let todo=[] //you can use an empty array or use an empty string, and any7thing can be pushed into it. Including objects
 
render()

    function addTodo(){
       const keepingUp=document.getElementById('todo-title');
       const inpuTuser=keepingUp.value;//each time the var is mentioned, the html element is used. We are christening it with a js name
        const whatDate=document.getElementById('date-picker');//this value also classifies as that of the variable stated above in the object
        const dueDate=whatDate.value//grabbing the date--rechritsening
               todo.push({Task: inpuTuser,
                    Date: dueDate});
      render()} /*
; //having stated another value related to the inpuTuser, it is key to classify the data as object first.Going back to the array to create object
        /*let element=document.createElement('div');
        element.innerText=todo;
        let box= document.getElementById('toditems')
        box.appendChild(element);*///THISFUNCTION JUST PUSHES THE INPUT INTO THE ARRAY. CALLING RENDER SOON AFTER WILL DISPLAY THE DATA ON THE PAGE 
        //realize that rechristening the user input and pushing it ot the array before calling the function(through the button)
        //I tried out the rendering fucntion, first placing all the data in one div, change the functions to update the div, and I can clear it.
    
        //after updating, it cleras the div and places the new data
    



/*FIRST TRIAL. COMMENTED OUT.



    
    function render(){ //this cuts on code lenght. Instead of displaying afresh each time there is a new input, we can render the data once, with the function render, which can be called upon input
        document.getElementById("toditems").innerHTML='' //the name you put in the function inside the function in the rray method should be repated in the function itself, on to be printed part or consoled
        
        todo.forEach(function(todo){
        let element=document.createElement('div')
        element.innerText=todo.Task+' ' +todo.Date;
        //createing a  delete button, that will also be printed after the data has been displayed
            const deleteButton=document.createElement('button');
            deleteButton.innerText='Delete'
//styling in js
deleteButton.style='margin-left=50px'
//onclick DOM MANIPULATION
            deleteButton.onclick="deletee"

            element.appendChild(deleteButton); //the button is appended after th printed element, appended after the body

        const box=document.getElementById('toditems') //remember the fisrt time mentioning anything from the html file, start with the document.xx
        box.appendChild(element); //coming in later to append the cretaed divs i.e. children into the div created in the document file 
        })}//this is to state the inbuilt values at the display of the html

    //the render function displays the todo list on the page. any changes made before render, on the todo list will be considered.
    //I acn thus be replacing the previous array with the updated one. replaceChild
    //The other way was to just append the new input to the div
    //the render function will first clear out teh div, then 3d manouver the updated data into the div:-)

deletee=>{
    element.innerText=''
}

localStorage.setItem('name','Josh') //set the local storage fisrt, before retrieving the value for the respective name
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

*/
//note there is no add to list button, use if plus the keyup condition to append list
//adding stuff to the local storage will be linked to the filters

/*const taskInput= document.getElementById("task");
//const taskBox=document.getElementById("taskbox")

//default occurrences of setting input data to the local storage, and parsing the same data to an object called todos, stringified in the application local storage

taskInput.addEventListener('keyup', e=>{
    const taskData=taskInput.value.trim()
    if (e.key=="Enter"){
               //the code to be excetued follows. appending now wont add the data to the local storage nor the taskbox 

        //SETTING THE NEW INPUT TO LOCAL STORAGE
        //as long as the key is enter key, then todos is fetched from the local storage.
        let todos=JSON.parse(localStorage.getItem('todo-list'))//getting first initializes the variable. the local storage keyname is parsed inotthe todos variable as a local storage item
        //creating a storage for the todolist object with stringified todos as the values
       
        if (!todos){todos=[]}//however, any time the todos(currently todos is the data obatined from the local storage)is empty, then it becomes an empty array

        let taskInfo={name:taskData, status:"pending"}//the input data is parsed to another object, together with the status property  
        todos.push(taskInfo)//the task info object with taskdata and status properties are pushed into the todos array as individual indexed array components

        //so far, the todolist keyname with stringified todos value is set in the local storage
        //the todos  
        //showTodo()//creating this function that will render the parsed local storage data to teh taskbox
        localStorage.setItem("todo-list", JSON.stringify(todos))//initailizes the todos assocaited with the obtained item above
    }
})

/*function showTodo(){
    let todos=JSON.parse(localStorage.getItem('todo-list'))//the variable todos contains the object todo list set in the local storage,the todos are fetched upon this declaration
     // bringing the list details so that the p is updated
       let li=""
    todos.forEach((todo, id) => {
        li+=`<li id="list" class="task">
        <label for="${id}">
            <input type="checkbox" onclick="updateStatus(this)" ${id}>
            <p id="sentence">${todo.name}</p>
        </label>
            <div class="settings">
                <i class="material-icons">more_horiz</i>
                <ul class="taskmenu">
                    <li><i class="material-icons">mode_edit</i>Edit</li>
                    <li><i class="material-icons">delete</i> Delete</li>
                </ul>   
            </div>

        </li>`//the object todos, has a todo and its id, a recall of the label. each of the two (todo and id)form part of the object, associated with teh list details
        //the function manipulates the selectedtask, in this case this represents the object
        //the updateStatus function is in the label parent, and the last element child is the paragraph
   });
   taskBox.innerHTML=li; 
}

/*function updateStatus(selectedTask){//this called in the function aboave is replaced with selected task that will be defined later on
 //getting the element with the paragraph
  let taskName=selectedTask.parentElement.lastElementChild;
 if (selectedTask.checked){
    taskName.sentence.add("checked")
 }
 else{
 taskName.sentence.remove("checked")}

    } 
    
    to return after extensive dom manipulation*/
