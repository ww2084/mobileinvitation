/* main .js */
$(function(){
 
  $('.galleryList a').click(function(){
   
    var imgSrc = $(this).find('img').attr('src');

  
    $('#gallery figure img').attr('src', imgSrc );

    return false; 
  });

});