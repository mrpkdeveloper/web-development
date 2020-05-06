//$ function is ascynchronus function and executes after the page is loaded
$(
    function(){
        let newtodobox = $('#newtodo')
        let addtodobtn = $('#addtodo')
        let todolist = $('#todolist')

        addtodobtn.click(function(){

            let newtodo = newtodobox.val()
            $.post(
                '/todos/',
                {task:newtodo},
                function(data){
                    todolist.empty()
                    for(todo of data){
                        todolist.append("<li>" + todo.task + "</li>")
                    }
                }
            )
        })

    }
)