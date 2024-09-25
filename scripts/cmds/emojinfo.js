module.exports = {
config: {
  name: "emojinfo",
  aurthor:"?/Rb",// Convert By Goatbot Rb
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "info",
  guide: "{pn}"
},

  onStart: async function ({ api, event, args }) {
  if (event.type == "message_reply") {
    if (event.messageReply && event.messageReply.attachments && event.messageReply.attachments[0] && event.messageReply.attachments[0].type == "sticker") {
      return api.sendMessage({
        body: `📜 Sticker Information: \n\n💳 ID: ${event.messageReply.attachments[0].ID}\n\n🏷️ Caption: ${event.messageReply.attachments[0].description}`
      }, event.threadID)
    }
    else return api.sendMessage("Only reply sticker", event.threadID);
  }
  else if (args[0]) {
    return api.sendMessage({sticker: args[0]}, event.threadID);
  }
  else return api.sendMessage("Only reply sticker", event.threadID);
},
  };