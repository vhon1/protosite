/* global $ */

$(document).ready(function(){
  
  $('#prototype').click(function(event){
    event.preventDefault();
    $('#prototype').addClass('active');
    $('.prototype').removeClass('prototypehdn');
    $('#about').removeClass('active');
    $('.about').addClass('prototypehdn');
  });


$('#about').click(function(event){
  event.preventDefault();
  $('#about').addClass('active');
  $('.about').removeClass('prototypehdn');
  $('#prototype').removeClass('active');
  $('.prototype').addClass('prototypehdn');
});
});