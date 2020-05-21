$(function () {
    let itemlist = $('#itemlist')
    for (todo in todos) {
        itemlist.append(createlistitem(todo))
    }
}
)
//executes when page is fully loaded