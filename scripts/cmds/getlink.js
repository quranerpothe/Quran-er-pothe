let axios = require("axios"); 
module.exports = {
  config: {
    name: "getlink",
    aliases: [`tinyurl`,`trl`],
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 0,
    role: 0,
    shortDescription: "Get download url from video, audio sent from group",
    longDescription: "Get download url from video, audio sent from group",
    category: "Media 📸",
    guide: "{pn} reply or add link of image"
  },
  
  onStart: async function ({ api, event }) {
    let { messageReply, threadID,  messageID } = event;
    if (event.type !== "message_reply") return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
    else {
            let num = 0
            let msg = `There is ${messageReply.attachments.length} 📫ꜰɪʟᴇ ᴀᴛᴛᴀᴄʜᴇᴅ📫:\n`
          for (var i = 0; i < messageReply.attachments.length; i++) {
				var shortLink = await require('tinyurl').shorten(messageReply.attachments[i].url);
				num +=1;
        msg += `${num}: ${shortLink}\n`;
    	}
        api.sendMessage(msg,threadID, messageID);
        }
  }
};