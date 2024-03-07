document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0 ){
        alert("Please Enter a Task For Today")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
    }
}


document.querySelector('#push1').onclick = function(){
    if(document.querySelector('#newtask1 input').value.length == 0 ){
        alert("Please Enter a Task For Tomorrow")
    }
    else{
        document.querySelector('#tasks1').innerHTML += `
            <div class="task1">
                <span id="taskname1">
                    ${document.querySelector('#newtask1 input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

