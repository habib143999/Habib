module.exports.config = {
  name: "shourov2",
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

var callback = () => api.sendMessage({body:`✿⃟✺.🅽🅾🆃🅸🅲.✺⃟✿

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝
-⋆⃝𝄞♡আমাদের গ্রুপে আসার জন্য আপনাকে অসংখ্য ধন্যবাদ✿࿐ 🥰🦋
-⋆⃝𝄞♡কিন্তু  আপনি বক্সে এক্টিভ নেই।  আপনি বক্সে সময় না দেওয়ার কারনে। আমাদের বক্সের নিয়ম অনুযায়ী আমরা আপনাকে রিমুভ করতে বাধ্য হচ্ছি✿࿐🥰🥀
     
-⋆⃝𝄞♡যদি এক্টিভি হন বক্সে আসতে ইচ্ছুক থাকেন তাহলে আমাদের বক্সের যেকোনো এডমিনের ইনবক্সে নক করে বলার সাথে সাথে✿࿐🥰🦋

-⋆⃝𝄞♡আপনাকে আবারও বক্সে এড করা হবে✿࿐💝🥀

❣️🥀☞✔শেষ কথা প্রতিদিন বক্সে  2 থেকে 3 ঘন্টা সময় দিতে হবে। 🌹


-⋆⃝𝄞♡ভালো থাকবেন সুস্থ থাকবেন✿࿐🥰🦋🌻

✺⃟✿-ভা্ঁলো্ঁবা্ঁসা্ঁ-আ্ঁন্ঁলি্ঁমি্ঁটে্ঁড্ঁ-✿⃟✺

╔╦══•    •✠•❀•✠ •   •══╦╗
♥    𝙂𝙧𝙤𝙪𝙥☬𝐂𝐄𝐎   ♥
                      ☟                     
❤️⚘ཻ͜͡𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯⚘ཻ͜͡ ♥
╚╩══•    •✠•❀•✠ •    •══╩╝`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
