const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "rb1",
    version: "1.0",
    author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "🇾🇹":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n \n🫡ষ্যার আপনার ইনবক্সে গালি দিসি চেক দিয়েন🫶🫰\n\n∘₊✧─────────────────✧₊∘",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/RB-BOT.png"),
          });
          await api.setMessageReaction("✅", event.messageID, event.threadID, api);
        break;
case "@মোহাম্মদ বাদল চৌধুরী":
          message.reply({
            body: "▬▬▬▬▬▬▬▬▬▬▬▬\n\n𝙼𝚘𝚑𝚊𝚖𝚖𝚊𝚍 𝙱𝚊𝚍𝚊𝚕 𝙲𝚑𝚘𝚠𝚍𝚑𝚞𝚛𝚢 𝚋𝚘𝚜𝚜 𝚒𝚜 𝚟𝚎𝚛𝚢 𝚋𝚞𝚜𝚢 𝚗𝚘𝚠 𝚙𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗'𝚝 𝚍𝚒𝚜𝚝𝚞𝚛𝚋 𝚑𝚒𝚖 𝚋𝚢 𝚖𝚎𝚜𝚜𝚊𝚐𝚒𝚗𝚐 𝚝𝚑𝚊𝚗𝚔𝚜\n\n▬▬▬▬▬▬▬▬▬▬▬▬",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/badol-boss.mp3"),
          });
          await api.setMessageReaction("🫡", event.messageID, event.threadID, api);
   case "@Alex Jan Chowdhury":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n\n🔴•বাদল বস ব্যস্ত আছে মেসেজ করে তাকে ডিস্টার্ব করবেন না•🔴",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/badol-boss.mp3"),
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
case "rules":
          message.reply({
            body: "❤️আসসালামু আলাইকুম কেমন আছেন সবাই❤️\n\n🟢গ্রুপ এর কিছু রুলস আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানে না তারা জেনে রাখেন🟢\n\n⚪-------------------------------------------------------------------------⚪\n\n🟡১) কোন প্রকার বাঝে কথা বলা যাবে না🟡\n\n🟡২) ইসলাম এর বিরুদ্ধে কোনো কথা বলা জাবে নাহ🟡\n\n🟡৩) কোন পর্ণ স্ক্রিনশট কিংবা লিংক দেওয়া  যাবে না🟡\n\n🟡৪) এখানে সবাই প্রিয় ভাই বন তো এখানে খারাপ কথা থেকে বিরত থাকেন🟡\n\n🟡৫)আপনি রোবটের ব্যবহার করা না জানলে help চান আডমিন এর থেকে তাও বাজে কমান্ড কইরেন নাহ🟡\n\n🟡৬) spam করা যাবে না🟡\n\n🟡৭) বট নিয়ে কোন প্রকার ফালতু টেক্সট করা যাবে না.. আর /help ফাইলে এ যেই গুলা  আসে এইগুলা শুধু ব্যাবাহর করবেন🟡\n\n🟡৮)এই গ্রুপে কোন বট এড করা যাবে না🟡\n\n🟡৯)  গ্রুপে আড্ডা দেওয়া যাবে এখানে সবাই ভাই ব্রাদার হয়ে থাকবেন🟡\n\n🟡১০) এই বট অন্য কোন গ্রুপে এড করতে চাইলে অবশ্যই এডমিনের পারমিশন নিতে হবে🟡\n\n🟡১১)আর  গ্রুপে কোন কিছু ইনফরমেশন পরিবর্তন করা যাবে না ..without permission🟡\n\n⚪-------------------------------------------------------------------------⚪\n\n🟥•—»যারা এই রুলস  গুলা মেনে চলতে পারবেন তারা group থাকেন 🌺আর যারা মানতে পারবেন না লিফট নিবেন, আর রুলস না মানলে সম্মান এর সাথে ব্যান & কিক দেওয়া হবে 🌸༅༎•─🟥\n\n⚪-------------------------------------------------------------------------⚪\n\n🟥•—»যারা বট সম্পক  বুঝেন না, তারা এডমিন কে মেনশন দিয়ে বলবেন🌸༅༎•─🟥\n\n🟥এডমিন এর ফেসবুক আইডি কোনো হেল্প লাগলে নক দিতে পারেন🟥\n\nhttps://www.facebook.com/TERA.REAL.FATHER.RBK4NG.007\n\nm.me/100003578151553\n\n𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑: (𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋)\n\n⚪------------------------------------------------------------------------⚪",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/VZUE.gif"),
          });
          await api.setMessageReaction("🤟", event.messageID, event.threadID, api);
  case "owner":
message.reply({
body: "⚪【•𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍-𝐈𝐍𝐅𝐎•】⚪\n\n🟡【•𝐁𝐎𝐓-𝐍𝐀𝐌𝐄•】🟡\n\n【•】𝐌𝐈𝐌•𝐁𝐎𝐓___//❤️💛🤍💜💚\n\n🔴【•𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑•】🔴\n\n🔵【•𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐀𝐋•】🔵\n\n🟣【•𝐀𝐆𝐄-𝟐𝟕•】🟣\n\n🟢【•𝐆𝐄𝐍𝐃𝐄𝐑-𝐌𝐀𝐋𝐄•】🟢\n\n⚫【•𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊•】⚫\n\nhttps://www.facebook.com/TERA.REAL.FATHER.RBK4NG.007\n\n🟠【•𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄•】🟠\n\n✉️【 .me/100003578151553 】✉️\n\n🟤【•𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏•】🟤\n\nwa.me/+8801782721761\n\n🆚𝐁𝐎𝐓-𝐏𝐑𝐄𝐅𝐈𝐗👉【•】🆚",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/owner.png"),
          });
          await api.setMessageReaction("🤟", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
