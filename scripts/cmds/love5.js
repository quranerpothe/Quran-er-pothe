const fs = require('fs');
const jimp = require('jimp');

module.exports.config = {
  name: "love5",
  version: "2.0.0",
  role: 0,
  author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  category: "Love",
  dependencies: {
    "fs": "",
    "jimp": ""
  }
};
module.exports.onStart = async ({ event, api }) => {
  const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
  const { threadID, messageID, senderID, mentions, messageReply } = event;
  const mentionedUsers = Object.keys(mentions);
  let user1, user2;
  if (mentionedUsers.length >= 2) {
    [user1, user2] = mentionedUsers;
  } 
  else if (mentionedUsers.length === 1 && messageReply) {
    user1 = mentionedUsers[0];
    user2 = messageReply.senderID;
  } 
  else if (messageReply) {
    user1 = senderID;
    user2 = messageReply.senderID;
  } 
  else if (mentionedUsers.length === 1) {
    user1 = senderID;
    user2 = mentionedUsers[0];
  } else {
    return api.sendMessage("অনুগ্রহ করে দুইজনকে ট্যাগ করুন বা একজন ব্যবহারকারীকে উত্তর দিন।", threadID, messageID);
  }
  try {
    let bg_img = await jimp.read("https://i.imgur.com/JeQ46AO.jpeg");
    let circleOne = await jimp.read(`https://graph.facebook.com/${user1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    let circleTwo = await jimp.read(`https://graph.facebook.com/${user2}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    bg_img.resize(1030, 587).composite(circleOne.resize(300, 300).circle(), 100, 140).composite(circleTwo.resize(300, 300).circle(), 630, 138);
    const filePath = `./gf_${user1}_${user2}.png`;
    await bg_img.writeAsync(filePath);
    api.sendMessage(
      {
        body: `╔⏤⏤⏤╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚⏤⏤⏤╗\n\n🐸গ্রামের মেয়েরা খেত হলেও পর্দাশীল🫶🧕🫵🏻 তোমাদের মত শার্ট পেন্ট পরা খানকি না-!\n\n╔⏤⏤⏤╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚⏤⏤⏤╗\n\n${mentions[user1] || 'User 1'} & ${mentions[user2] || 'User 2'}`,
        attachment: fs.createReadStream(filePath),
        mentions: [
          { tag: mentions[user1] || 'User 1', id: user1 },
          { tag: mentions[user2] || 'User 2', id: user2 }
        ]
      },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );
  } catch (badolerror) {
    console.error(badolerror);
    api.sendMessage("🫦খতম বাই বাই টাটা গুডবাই গেয়া 🎸", threadID, messageID);
  }
};
