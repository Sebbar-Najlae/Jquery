$(document).ready(function(){
    
$( "p" ).hide();
$( "a" ).click(function( event ) {
  event.preventDefault();
  $( this ).hide();
});
});
