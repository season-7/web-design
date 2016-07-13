$(document).ready(function() {
  $('#normal').mouseover(function(){
      $(this).stop().effect('shake', {distance:3}, 200);
  });
});
