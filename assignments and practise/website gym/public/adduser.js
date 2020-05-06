$(function(){
    let username = $('#name')
    let userage = $('#age')
    let usergender = $('#gender')
    let bttnsubmit = $('#submit')


    bttnsubmit.click(function(){
        adduserdb(
            username.val(),
            userage.val(),
            usergender.val(),
            function(addeduser){
                window.alert("added " + addeduser.name + " to the database")
            }
            )
    })
})