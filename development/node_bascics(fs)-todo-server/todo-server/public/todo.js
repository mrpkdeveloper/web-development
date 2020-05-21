let todos = [
    'first task',
    'second task',
    'third task'
]
function pushitem(item) {
    todos.push(item)
}

function createlistitem(task) {
    return $(`<li>${task}</li>`)

}
