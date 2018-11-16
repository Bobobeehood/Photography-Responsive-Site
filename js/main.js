jQuery(document).ready(function() {
    
    "use strict"
    
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
  
    });
    
    $(".text").typed({
        strings:["<strong>we love</strong><strong class='primary'> Photography...</strong>","<strong>we speak</strong><strong class='primary'> photography...</strong>","<strong>we live</strong><strong class='primary'> Photography...</strong>","<strong>we dream</strong><strong class='primary'> photography...</strong>","<strong>and we share</strong><strong class='primary'> Photography!</strong>"],
         typespeed:0,
         loop:true
         
     });
    
     $(window).scroll(function(){
        
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    });
 
});

