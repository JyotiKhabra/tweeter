/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function(tweetObj) {
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
  //$('.tweet').append($tweet);
   return $tweet
  }

createTweetElement({
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
})
});

