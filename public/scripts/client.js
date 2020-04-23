/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

  //Escape Function 

const escape = function (str) {
  let div = document.createElement('div');
  // < => &lt; > => &gt;
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
  //Creating the Tweet Body
  const createTweetElement = function(tweetObj) {
    const $tweet = $(`<article class="tweet">
      <header>
        <img src="${escape(tweetObj.user.avatars)}" alt="isaac avatar">
          <span class="username" name="username">${escape(tweetObj.user.name)}</span>
        <span class="userhandle" name="userhandle">${escape(tweetObj.user.handle)}</span>
      </header>
      <div class="text" name="tweet">${escape(tweetObj.content.text)} </div>
      <footer>
        <span class="date" name="date">${escape(tweetObj.created_at)}</span>
        <span name="flag">⚑ ↱↲ ♥︎ </span>
      </footer>
      </article>`)
    return $tweet
  }
 

//Rendering Tweets Data
  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets){
    // calls createTweetElement for each tweet
      let result = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweet-container").append(result);
    }
  }
//  renderTweets(data);
//Tweet Validation
  function checkTweet(tweet)
  {
    if(!tweet || tweet.length === 0) {
      alert("Create a Tweet!");
      return false;
    }
    if(tweet.length > 140) {
      alert("Tweet exceeds character count!");
      return false;
    }
    return true;
  }
  
  //Loading Tweets
  function loadPosts() {
    $.getJSON(`/tweets/`)
    .then(tweets =>{
      renderTweets(tweets)
    });
  }
  
  const sendTweet = function(data){
     console.log('data :>> ', data);
     $.post('/tweets', data)
     .then(res =>
       {
        loadPosts()
       }
     );
  }


  $(document).ready(function() {
    
    //Form Submssion
    $( `#post-tweet-form` ).on( "submit", function( event ) {
      event.preventDefault();
      const tweet = $("#tweet-text").val()
      //console.log("tweet:", tweet);
      if(checkTweet(tweet)){
      const data = $(this).serialize()
      sendTweet(data);
      }
      $("#tweet-text").focus()
      return false;
    });
  loadPosts();
});


