const fs = require("fs-extra");
const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get('https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json');
  return base.data.api;
};

module.exports = {
  config: {
    name: "badol2",
    version: "1.6.9",
    author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
    countDown: 5,
    role: 0,
    shortDescription: "Charming and Stylish Bot",
    description: "fun with bot",
    category: "fun",
    guide: {
      en: "{pn}",
    },
  },

  onStart: async function () {
    const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
    console.log("I'm MIM-BOT-007 ready to chat with you guys!");
  },

  onChat: async function ({ api, event, args }) {
    const { threadID, messageID } = event;

    const messages = [
      `বেশি mim mim করলে চুম্মা দিয়া তোমার কিডনি ব্লক করে দেবো😒`,
      `শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺`,
      `আমি আবাল দের সাথে কথা বলি না,ok😒`,
      `দিনশেষে পরের BF সুন্দর-☹`,
      `আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস মোহাম্মদ বাদল চৌধুরী কে দান করেন-🥱🐰🍒`,
      `ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস মোহাম্মদ বাদল চৌধুরী এর ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://m.me/MBC.K1NG.007`,
      `ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤`,
      `জান তোমার নানি'রে আমার বস বাদল এর হাতে তুলে দিবা-🙊`,
      `আমাকে না ডেকে আমার বস মোহাম্মদ বাদল চৌধুরী কে একটা জি এফ দাও-😽🫶`,
      `💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚`,
      `আমার গল্পে তোমার নানা সেরা-🙊🙆‍♂`,
      `আন্টি-🙆-আপনার পোলা-👰‍♀-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤`,
      `জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽`,
      `জান পোলা হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽`,
      `আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪`,
      `উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡`,
      `আমি এখন বস মোহাম্মদ বাদল চৌধুরী এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻`,
      `তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸`,
      `তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛`,
      `কারেন্ট একদম বেডা গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤`,
      `𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডা-🐸`,
      `🐸মিম না ভাবি ,বল`,
      `কালকে দেখা করিস তো একটু 😈`,
      `দূরে যা, তোর কোনো কাজ নাই, শুধু মিম মিম করিস  😉😋🤣`,
      `৯৯টাকায় ৯৯জিবি ৯৯বছর-☺🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈`,
      `বাদল চৌধুরী কে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও লনসেন্ছ বেডা..!🥱`,
      `🥛-🍍👈 -লে খাহ্..!😒`,
      `তোর কি চোখে পড়ে না আমি বস মোহাম্মদ বাদল চৌধুরী এর সাথে ব্যাস্ত আসি😒`,
      `আমি তো অন্ধ কিছু দেখি না🐸`,
      `কি হলো ,মিস টিস করচ্ছিস নাকি🤣`,
    ];

    if (event.body.indexOf("Mim") == 0 || (event.body.toLowerCase() == "mim") || (event.body.indexOf("মিম") == 0)) {
      const randMessage = messages[Math.floor(Math.random() * messages.length)];

      const msg = {
        body: `${randMessage}`,
      };

      return api.sendMessage(msg, threadID, (mimbadol, info) => {
        if (!mimbadol) {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            author: event.senderID,
          });
        }
      }, messageID);
    }
  },

  onReply: async function ({ api, event, args }) {
    if (event.type !== "message_reply") return;

    const badol = args.join(" ");

    try {
      const response = await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(badol)}`);
      const replyMsg = response.data.reply;

      return api.sendMessage(replyMsg, event.threadID, (mimbadol, info) => {
        if (!mimbadol) {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            author: event.senderID,
          });
        }
      }, event.messageID);
    } catch (mimbadol) {
      console.error("mimbadol:", mimbadol);
      return api.sendMessage(" 🎸api চুদগায়া ভক্ত🙂", event.threadID, event.messageID);
    }
  }
};
