var products = [{"name":"baidu","url":"img/product/product-title.png"},
                {"name":"baidu2","url":"img/product/product-title.png"},
                {"name":"baidu3","url":"img/product/product-title.png"},
                {"name":"baidu4","url":"img/product/product-title.png"},
                {"name":"google","url":"img/product/product-title.png"}];
var need_pause = false;

var index = 0;

function img_mouse_enter(){
	//stop creating new product
	need_pause = true;
    
	//stop current animation
	// $('div[name|="product"]').addClass('animation_pause');
	$('div[name|="product"]').each(function(index){
		//避免已经走完的照片因为样式的改变再从头走一次
		if($(this).css("top") != "-107px"){
			$(this).addClass('animation_pause');
		}
	});
    // $(this).parent().addClass('animation_pause');
}

function img_mouse_out(){
	//stop creating new product
	need_pause = false;

	//stop current animation
	$('div[name|="product"]').removeClass('animation_pause');
    // $(this).parent().removeClass('animation_pause');
}




$(document).ready(function() {
  //定期调用函数，轮询数组元素
   setInterval(function(){
  // if need_pause, do nothing
  if(!need_pause){
      // if exists, destory it first
      if($("#"+products[index].name).length>0){
      	$("#"+products[index].name).remove();
      }

	  // create element
	  var product = $('<div id="'+products[index].name+'" name="product" class="product element linear_animation"></div>');
	  var img = $('<img src="'+products[index].url+'">');
	  img.mouseenter(img_mouse_enter);
	  img.mouseout(img_mouse_out);
	  var name = $('<p>'+products[index].name+'</p>');
	  product.append(img);
	  product.append(name);
	  $("#mask").append(product);


	  //遍历数组
	  index++;
	  if(index == products.length) {
	    index=0;
	  }
	  // add function for mouseover, mouseout, click


	  // append to stage
	  

  }

   },3000) ;


});

