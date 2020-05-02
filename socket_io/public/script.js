let socket = io()
socket.on('connected', () => {
    console.log("connected " + socket.id)
})

//runs when page is loaded completely
$(
    function () {

        let input = $('#input')
        let submit = $('#submit')
        let msglist = $('#msglist')
        let username = $('#login')
        let loginbtn = $('#loginbtn')
        let logindiv = $('#login-div')
        let chatdiv = $('#chat-div')

        let user = ''


        submit.click(function () {
            //this sends msg to server
            socket.emit('send_msg', {
                user: user,
                msg: input.val()
            })

        })

        loginbtn.click(function () {
            user = username.val()
            chatdiv.show()
            logindiv.hide()
        })

        //this will listen to server and add data to webpage
        socket.on('recv_msg', function (data) {
            msglist.append($('<li>' + data.user + " : " + data.msg + '</li>'))
        })

    }
)
