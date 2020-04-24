$(function () {
    let productlist = $('#productlist')
    fetchproducts(function (products) {
        productlist.empty()
        for (product of products) {
            productlist.append(createproductcard(product))
        }
    })
}
)
//executes when page is fully loaded