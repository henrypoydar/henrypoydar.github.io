function setupChars(chars_array) {
  var h = $(window).height();
  $('body').css('font-size', h + 'px');
  $.each(chars_array, function(i) {
    $('#chars').append('<div>' + chars_array[i] + '</div>');
  });
}

function displayChars(chars_array, interval) {
   var index = 0;
   setInterval(function(){
     $('#chars > div:eq(' + ((index == 0) ? 0 : index - 1) + ')').slideUp('fast');
     $('#chars > div:eq(' + index + ')').show();
     index = (index < chars_array.length) ? index + 1 : 0;
   }, interval);
 }