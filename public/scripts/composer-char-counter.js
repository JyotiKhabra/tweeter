$(document).ready(function() {
  //console.log("works great!");
$("#tweet-text").keyup(function(){
  let max = 140;
  let amountOfChars = $(this).val().length;
  if(amountOfChars <= max){
    let counter = max - amountOfChars;
    $(this).parent().find(".counter").val(counter);
  }
});
});
// #tweet-text = text area
// .counter = the  counter 
// btn = button
// <textarea name="text" id="tweet-text"></textarea>
// <button type="submit">Tweet</button>
// <output name="counter" class="counter" for="tweet-text">140</output>

// $("#btn").on("click", () => {
//   console.log(this);
// });