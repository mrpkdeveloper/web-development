let socket = io()
socket.on('connected', () => {
    console.log("connected " + socket.id)
})

$(
    function () {

        let input = $('#input')
        let submit = $('#submit')
        let msglist = $('#msglist')


        submit.click(function () {

            socket.emit('send_msg', { msg: input.val() })

        })

        // socket.on('recv_msg', function (data) {
        //     msglist.append($('<li>' + data.msg + '</li>'))
        // })

    }
)
//runs when page is loaded completely