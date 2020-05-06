$(
    function () {
        let input_name = $('#name')
        let input_age = $('#age')
        let input_city = $('#city')
        let btn_submit = $('#submit')
        let table = $('#persons')
        let btn_delete = $('#delete')
        let delete_age = $('#delete_age')

        function refreshtable(persons) {   //persons is just a name of variable that needs to be passed 
            table.empty()
            table.append(
                `<tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
        </tr> `
            )
            for (person of persons) {
                table.append(
                    `<tr>
                        <td>${person.name}</td>
                        <td>${person.age}</td>
                        <td>${person.city}</td>
                    </tr>`
                )
            }
        }

        $.get('/api/persons', function (data) {
            refreshtable(data)                    //here we pass data ie. table to refreshtablefunction
        })

        btn_submit.click(function () {
            $.post('/api/persons',
                {
                    name: input_name.val(),
                    age: input_age.val(),
                    city: input_city.val()

                },
                function (data) {
                    refreshtable(data)
                })
        })

        btn_delete.click(function () {
            $.post('/api/delete',
                {
                    delete_age: delete_age.val()
                },
                function (data) {
                    refreshtable(data)
                }
            )
        })



    }
)
