module.exports.config = {
  name: "?২৪৭৮",
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

var callback = () => api.sendMessage({body:`ATTENTION PLEASE:
⚠️⚠️⚠️⚠️⚠️
,,,,,,,,,,,,,,,,,,,,,,,,. (A) ,,,,,,,,,,,,,,,,,,,, 
আসসালামু আলাইকুম,,,,,,,, এডমিন দের উদ্দেশ্য বলছি, আপনারা জানেন আমাদের ভালোবাসার ক্যামপাস ফ্যামিলি গ্রুপ প্রতি সপ্তাহে লেভেল আপ হয় আমরা লেভেল আপ করে থাকি,,, 👉 বক্স একটিভিটি,এসএস একটিভিটি,বক্স কল একটিভিটি,👈 এগুলা দেখে আর আমরা আমাদের কানামাছি ফ্যামিলি গ্রুপ কে আর সামনে এগিয়ে নিয়ে যাওয়ার চেষ্টা  করবো।আর তা আপনাদের কে সিইও পারসন রা বক্স নিয়ে কিছু  কথা বলবে, পরামর্শ দিবে এখন থেকে প্রতি সপ্তাহে এডমিন বক্সে ৩ দিন কল হবে,রবি বার,মঙ্গলবার, বুহস্পতিবার,রাত ৭:০০ টা থেকে ৮:০০টা পযন্ত কল চলবে,আপনারা সবাই এডমিন লোগো লাগিয়ে নিবেন,এবং এডমিন বক্সে কল উটার সাথে সাথে কলে জয়েন হওয়ার চেষ্টা করবেন,বক্স কল ড্রপ দিয়ে হলেও এডমিন বক্সে কলে আসবেন গুরুত্বপূর্ণ কথা হবে কথা শেষ হলে আবার নিজ নিজ দায়িত্বে বক্সে কল তুলবেন,আশা করি সবাই বুঝতে পারছেন,ধন্যবাদ ভালোবাসা অবিরাম❤️🥀
⛔⛔⛔⛔🤟⛔⛔⛔⛔
█▄▄▄▄▄▄▄▄▄▄█
 কা্ঁনা্ঁমা্ঁছি্ঁ⚘ཻ͜͡ফ্যা্ঁমি্ঁলি্ঁ⚘ཻ͜͡গ্রু্ঁপ্ঁ
╔══•ೋೋ•══╗ 
এ্ঁর্ঁ প্ঁক্ষ্ঁ থে্ঁকে্ঁ অ্ঁনে্ঁক্ঁ অ্ঁনে্ঁক্ঁ
 🔻🔻🔻শু্ঁভ্ঁকা্ঁম্ঁনা্ঁ🔻🔻🔻
 █▄▄▄▄▄▄▄▄▄▄█
╔══•ೋೋ•══╗ 
✅Group Founder✅
⚘ཻ͜͡ ☞Alex Rishan Aqualit⚘ཻ͜͡  
࿇ ══━━━━✥◈✥━━━━═`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
