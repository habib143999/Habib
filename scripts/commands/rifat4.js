module.exports.config = {
  name: "shourov4",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "rules",
  category: "rules",
  usages: "",
  cooldowns: 5,
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/13j22KWT/Messenger-creation-91412df6-6e58-45b4-967c-4f320da81804.jpg"];

var callback = () => api.sendMessage({body:`🌿🥀Assalamu alaikum🌿

➤⃚͜͡░⃟̎̎̎̎̐💕ভাৃঁলোৃঁবাৃঁসাৃঁরৃঁ ক্যাৃঁমৃঁপাৃঁসৃঁ⑅⃝✺❥᭄
 গ্রুপের  কিছু 🍃💥নিয়ম কানুন আছে যেটা মানা আমাদের অতি জরুরী☺

(0)~আমার গ্রুপ কোনো হাই বা হ্যালো হবে না শুধু সালাম হবে আর এই নিয়ম টা মানা সবার অতি জরুরী আর এই নিয়ম টা যে না মানতে পারবে তার এই গ্রুপে থাকার কোনো অধিকার নেই ~♥~🌿☺

(১)~গ্রুপের name & profile কেউ চেঞ্জ করতে পারবে না & গ্রুপে কেউ মেম্বার এড করলে এডমিনদের সাথে আগে যোগাযোগ করবেন 🥰 💥🍀🔥

(২)~„"গ্রুপে সবাই মিলেমিশে থাকবো কোনো রকম ঝগড়া করবো না💥🍀🔥 

(৩)~„"গ্রুপে কোনো ১৮+ ছবি বা ভিডিও দেওয়া যাবে না❌🔞🔥😊

(৪)~„"গ্রুপের কোনো মেম্বারের ইনবক্সে যাওয়া যাবে না ❌কোনো জরুরী কথা থাকলে এডমিনের পারমিশন নিবেন💥🍀😊

(৫)~„" গ্রুপে কারো সাথে রিলেশন করে এটা নিয়ে গ্রুপে সমস্যা করলে ২জন কে রিমুভ করা হবে🍀💥☑️

(৬)~„" 3..দিনের বেশি এক্টিভ না থাকলে গ্রুপ থেকে রিমুভ করা হবে🍀💥☑️

(৭)~„"গ্রুপে আসতে না পারলে এডমিনদের বলতে হবে সমস্যার কথা🍀💥😊

(৮)~„"নতুন মেম্বার আসলে সবাই নতুন মেম্বার কে ওয়েলকাম জানাবেন 💥🌼🥰

(৯)~„"গ্রুপে ঝামেলা হলে নিজ দায়িত্বে এডমিন কে জানাবেন 🍀💥😊 

(১০)~„"গ্রুপের এডমিন বা  মেম্বারদের জন্মদিন হলে সবাই উইশ করবেন🎂🍀💥😊

(১১)~„" গ্রুপের এডমিন বা মেম্বার যদি কেউ কারো ইনবক্সে বিরক্ত করে তাহলে সাথে সাথে 🔥 Admin🔥 কে জানাবেন💥🔥🍀

(১২)~„"গ্রুপে কেউ বিনা কারনে Offline লাগাবে তাকে রিমুভ করা হবে, এডমিনেরা,🥰🌿

(১৩)""গ্রুপে অন্য কোনো গ্রুপ এর ইস্কিন সর্ট & video দিতে পারবেন না,🥰

(১৪)""গ্রুপ কল এ এসে দয়াকরে কেউ ভিডিও কল চালু করবেন না plz 🙏🌼

(১৫)""গ্রুপে এ কোনো মেম্বার যদি (২)বার এর বেসি লিপট নেয় তাকে তৃতীয় বার এড্ড দেওয়া যাবে না🥰😍

(১৬)""গ্রুপে মেম্বারদের জন্য অটো Support দেওয়া যাবে না,যদি জানতে পারি অটো Support তাহলে গ্রুরুপ থেকে বিনা Notice রিমুভ করা হবে

(১৭)~''„গ্রুপে কোন বাজে কথা বলা যাবে না যদি কেউ এমন এমন কিছু করে তাকে গ্রুপ থেকে বের করে দেওয়া হবে। 
🙂🙂🙂সবাই নিয়ম  মেনে চলবেন আশা করি😊😊
               👇
👉𝐂𝐄𝐎 𝐒𝐇𝐎𝐔𝐑𝐎𝐕༆༆

♥~ভালোবাসা😍অবিরাম😍

🌿🌺🥀ধন্যবাদ🥀🌺🌿

(999) শেষ কথা হচ্ছে গ্রুপে প্রেম প্রিরিতি নিয়ে যারা সম্যসা করবে তাদেরকে বিনা: অনুমতিতে রিমভ করা হবে🙏🙏🙏
 

#𝑯𝑨𝑷𝑷𝒀_𝑮𝑹𝑶𝑼𝑷𝑰𝑵𝑮~☺`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
