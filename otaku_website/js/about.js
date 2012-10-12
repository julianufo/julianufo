var z_index = 10;

function product_click(event){
	z_index++;

    // increate z-index for current element
    $(this).css("z-index",z_index);
    
    // hide mask img
    $(this).("display","none")
    //show mask img of the deepest 4 products 
}


$(document).ready(function() {
  //bind onClick() for products
  $('div[name|="product"]').click(product_click());

});

