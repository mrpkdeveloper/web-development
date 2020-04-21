$(
    function () {
        let input_name = $('#name')
        let input_age = $('#age')
        let input_city = $('#city')
        let btn_submit = $('#submit')
        let table = $('#persons')

        function refreshtable(persons) {
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

        $.get('/api/persons',function(data){
           refreshtable(data)
        })
        
        btn_submit.click(function () {
            console.log("button pressed")
            $.post('/api/persons',
            {
                name: input_name.val(),
                age: input_age.val(),
                city: input_city.val()

            },
            function(data){
               refreshtable(data)
            })
        })
    }
)
