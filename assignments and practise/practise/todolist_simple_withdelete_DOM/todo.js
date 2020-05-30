$(
    function () {
        let input = $('#input')
        let add_bttn = $('#add')
        let todolist = $('#todolist')

        add_bttn.click(function () {
            let li = document.createElement('li')

            //text span
            let taskspan = document.createElement('span')
            taskspan.innerText = input.val()

            //delete button
            let delete_button = document.createElement('button')
            delete_button.innerText = " delete "
            delete_button.onclick = function (event) {
                // console.log(event.target.parentElement) we can acces parent ellement through this
                event.target.parentElement.remove()
            }

            //up button
            let up_btn = document.createElement('button')
            up_btn.innerText = "up"
            up_btn.onclick = function (event) {
                // event.target = up_btn
                // event.target.parentElement = the <li> item
                // event.target.parentElement.parentElement = the todolist
                event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement, //insert this element 
                    event.target.parentElement.previousElementSibling //before its previous element
                )
            }

            //down button
            let down_btn = document.createElement('button')
            down_btn.innerText = "down"
            down_btn.onclick = function (event) {
                // event.target = up_btn
                // event.target.parentElement = the <li> item
                // event.target.parentElement.parentElement = the todolist
                event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement.nextElementSibling,//insert this
                    event.target.parentElement //before this 
                )
            }
            //appending 
            li.appendChild(delete_button)
            li.appendChild(taskspan)
            li.appendChild(up_btn)
            li.appendChild(down_btn)
            todolist.append(li)

        })

    }

)