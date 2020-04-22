/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  const createTweetElement = function(tweetObj) {
    //const header = $("<header>").addClass("tweet")
    //const article = $("<article>").addClass("tweet")
    const $tweet = $(`<article class="tweet">
      <header>
        <img src="${tweetObj.user.avatars}" alt="isaac avatar">
          <span class="username" name="username">${tweetObj.user.name}</span>
        <span class="userhandle" name="userhandle">${tweetObj.user.handle}</span>
      </header>
      <div class="text" name="tweet">${tweetObj.content.text} </div>
      <footer>
        <span class="date" name="date">${tweetObj.created_at}</span>
        <span name="flag">⚑ ↱↲ ♥︎ </span>
      </footer>
      </article>`)
      // $('.tweet').append($tweet);
    return $tweet
  }

  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets){
    // calls createTweetElement for each tweet
      let result = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweet-container").append(result);
    }
  }
  renderTweets(data);

  $( `#post-tweet-form` ).on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( this ).serialize() );
    $(`#post-tweet-form`).ajaxSubmit({url: `/tweets/`, type:'POST'})
  });

});






//Form JQuery
// function loadPosts() {
//   $.getJSON(`/tweets/`)
//   .then(tweets =>{
//     //console.log("tweets:", tweets);
//   const $postContainer = $(`#tweet-container`);
//   for (const tweet of tweets);
//   const postHTML = `<article class="tweet">
//   <header>
//     <img src="${tweetObj.user.avatars}" alt="isaac avatar">
//       <span class="username" name="username">${tweetObj.user.name}</span>
//     <span class="userhandle" name="userhandle">${tweetObj.user.handle}</span>
//   </header>
//   <div class="text" name="tweet">${tweetObj.content.text} </div>
//   <footer>
//     <span class="date" name="date">${tweetObj.created_at}</span>
//     <span name="flag">⚑ ↱↲ ♥︎ </span>
//   </footer>
//   </article>`
//   $postContainer.append(postHTML);
//   });
//   }