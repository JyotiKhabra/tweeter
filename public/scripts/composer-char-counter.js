$(document).ready(function() {
$("#tweet-text").keyup(function(){
  let max = 140;
  let amountOfChars = $(this).val().length;
    let counter = max - amountOfChars;
    $(this).parent().find(".counter").val(counter);
  if (counter < 0) {
    $(this).parent().find('.counter').val(counter).css('color', '#FF0000')
  }
});
});
