$(function(){
       
     let product_name = $('#Productname')
     let manufacturer = $('#Manufacturer')
     let price = $('#Price')
     let btn_submit = $('#submit')

     btn_submit.click(function(){
         addproducts(
             product_name.val(),
             manufacturer.val(),
             price.val(),
             function(addedproduct){
                 window.alert("added" + addedproduct.name + "to the database")
             }
         )
     })


    }
)