module.exports = {
  config: {
    name: "bio",
    version: "1.7",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: " ",
      en: "change bot bio ",
    },
    longDescription: {
      vi: " ",
      en: "change bot bio ",
    },
    category: "owner",
    guide: {
      en: "{pn} (text)",
    },
  },
  onStart: async function ({ args, message, api }) {
    api.changeBio(args.join(" "));
    message.reply("𝐂𝐇𝐀𝐍𝐆𝐄 𝐘𝐎𝐔𝐑. 𝐁𝐎𝐓 𝐁𝐈𝐎" + args.join(" "));
  },
};
