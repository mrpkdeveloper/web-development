$(function () {
    let itemlist = $('#itemlist')
    let input = $('#input')
    let submit = $('#add')

    submit.click(function () {
        pushitem(input.val())
        console.log(input.val())
        itemlist.empty()
        // console.log(todos[1])
        // itemlist.append(createlistitem(input.val()))
        for (todo in todos) {
            itemlist.append(createlistitem(todos[todo]))
        }
    })
}
)
//executes when page is fully loaded