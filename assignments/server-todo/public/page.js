$(function () {
        let addbtn = $('#add')
        let newtask = $('#input')
        let todoList = $('#todolist')

        addbtn.click(function () {
            // console.log('button was clicked')
            let newtasklist = newtask.val()  //function of jquerry

            $.post(
                '/list/',
                { task: newtasklist , status: "" }, 
                function (data) {
                    todoList.empty()
                    for (todo of data) {
                        todoList.append("<li>" + todo.task + "</li>")
                    }
                }
            )



        })




    }
)
// this dolar block loadeds after the page is completed loaded