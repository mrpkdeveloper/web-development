function getuserfromdb() {
    $.get('/api/user', function (data) {
        done(data)
    })
}

function adduserdb(name, age, gender, done) {
    $.post('/api/user', {
        name: name,
        age: age,
        gender: gender
    }, function (data) {
        done(data)
    })
}