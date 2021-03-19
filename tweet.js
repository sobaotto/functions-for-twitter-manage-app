const Twitter = require("twitter");
const oAuth = require("./keys");

// 外部モジュールを用いて、認証を行い、ツイートができる状態の関数を作る
const tweet = (postContent) => {
  const client = new Twitter({ ...oAuth });

  client.post(
    "statuses/update",
    { status: postContent },
    (error, tweet, response) => {
      if (error) throw error;
      console.log(tweet);
    }
  );

  return null;
};

module.exports = tweet;
