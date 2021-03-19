const functions = require("firebase-functions");
const postFunction = require("./postFunction");

// exports.scheduledPost = functions
//   .region("asia-northeast1")
//   .pubsub.schedule("every 1 minutes")
//   .onRun((context) => {
//     postFunction();
//   });

// ユーザーが設定した情報をfirestoreから取得してツイートする関数。
exports.httpPost = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    postFunction();
  });
