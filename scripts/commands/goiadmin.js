module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100070297030133") {
    var aid = ["100070297030133"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস এখন বিজি আছে কিছু বলার থাকলে অনার ইঁনঁবঁক্সেঁছেঁ জাও আর মনের ভাব প্রোকাস করো 🥰🥰 https://www.facebook.com/profile.php?id=100070297030133&mibextid=ZbWKwL"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
