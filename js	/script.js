
// Slide in contact info

$(document).ready(function() {
      
          $(window).scroll( function(){
      
              $('.hideme').each( function(i){
            
                     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
            
                 /* If the object is completely visible in the window, fade in */
                  if( bottom_of_window > bottom_of_object ){
                
                      $(this).animate({'opacity':'1'},5500);
                    
                  }
            
              }); 
    
          });
    
      });