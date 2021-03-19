const postFunction = async () => {
  const tweet = require("./tweet");
  const admin = require("firebase-admin");
  const serviceAccount = require("./serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const db = admin.firestore();

  // firestoreから取得した情報を必要なものだけ格納するリスト。
  const functionData = [];

  // firestoreからユーザーの設定情報を取得する。
  const querySnapshot = await db.collection("functions").get();
  try {
    querySnapshot.forEach((doc) => {
      functionData.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.log(error);
  }

  // 取得した情報の中の、起動有無情報を判定してツイートする。
  functionData.forEach((data) => {
    if (data.switch === "ON") {
      // tweet();の自作モジュールでツイートできる。
      console.log(data.tweet);
    }
  });
};

module.exports = postFunction;
