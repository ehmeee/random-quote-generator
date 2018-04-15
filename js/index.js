var quotes = [
  {quote: "I don't know where I'm going from here, but I promise it won't be boring.", 
   author: "David Bowie" 
  },
  {quote: "I'd rather be hated for who I am, than loved for who I am not.", 
   author: "Kurt Cobain" 
  },
  {quote: "Reality leaves a lot to the imagaination.", 
   author: "John Lennon" 
  },
  {quote: "Artists, musicians, scientists- if you have any kind of visionary aptitude, it's often something that you don't have a choice in. You have to do it.", 
   author: "Patti Smith" 
  },
  {quote: "Loneliness adds beauty to life. It puts a special burn on sunsets and makes night air smell better.", 
   author: "Henry Rollins" 
  },
  {quote: "Desire is individual. Happiness is common.", 
   author: "Julian Casablancas" 
  },
  {quote: "One good thing about music, when it hits you, you feel no pain.", 
   author: "Bob Marley" 
  },
  {quote: "The beautiful thing about learning is that no one can take it away from you.", 
   author: "B.B. King" 
  },
  {quote: "Most people feel so conditioned, so oppressed by everything that goes on around them that they just give in. You have to refuse to give in.", 
   author: "Robert Smith" 
  },
  {quote: "All I can do is be me. Whoever that is.", 
   author: "Bob Dylan" 
  },
  {quote: "Where's your will to be weird?", 
   author: "Jim Morrison" 
  },
  {quote: "Musicians want to be the loud voice for so many quiet hearts.", 
   author: "Billy Joel" 
  },
  {quote: "Music is in a world within itself, it is a language we all understand.", 
   author: "Stevie Wonder" 
  }
];

var displayedQuote;
var currentIdx;

function updateQuote() {
  do {
    var idx = Math.floor(Math.random() * quotes.length);
  } while(currentIdx === idx);

  displayedQuote = quotes[idx];
  
  currentIdx = idx;
  $('#quote').html(quotes[idx].quote)
  $('#author').html(quotes[idx].author)
}

function shareTweet() {
  var quotetoTweet = quotes[currentIdx].quote;
  var authortoTweet = quotes[currentIdx].author;
  quotetoTweet = encodeURI(quotetoTweet);
  authortoTweet = encodeURI(authortoTweet);
  window.open("https://twitter.com/intent/tweet?text=" + quotetoTweet + " -" + authortoTweet);
}

$(function() {
  updateQuote();
  $('#generator').click(function(){
    updateQuote();
  })
  $('#twitter').click(function(){
    shareTweet();
  })
})