const { loadImage, createCanvas } = require("canvas");
const fs = require("fs-extra");
const axios = require("axios");

module.exports = {
  config: {
    name: "wish",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    category: "happy",
    shortDescription: {
      en: "Generates a 'happy' image with the user's profile picture.",
    },
  },
  wrapText: async (ctx, name, maxWidth) => {
    return new Promise((resolve) => {
      if (ctx.measureText(name).width < maxWidth) return resolve([name]);
      if (ctx.measureText("W").width > maxWidth) return resolve(null);
      const words = name.split(" ");
      const lines = [];
      let line = "";
      while (words.length > 0) {
        let split = false;
        while (ctx.measureText(words[0]).width >= maxWidth) {
          const temp = words[0];
          words[0] = temp.slice(0, -1);
          if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
          else {
            split = true;
            words.splice(1, 0, temp.slice(-1));
          }
        }
        if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
          line += words.shift();
        else {
          lines.push(line.trim());
          line = "";
        }
        if (words.length === 0) lines.push(line.trim());
      }
      return resolve(lines);
    });
  },

  onStart: async function ({ args, usersData, threadsData, api, event }) {
    let pathImg = __dirname + "/cache/background.png";
    let pathAvt1 = __dirname + "/cache/Avtmot.png";
    var id = Object.keys(event.mentions)[0] || event.senderID;
    var name = await api.getUserInfo(id);
    name = name[id].name;
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var background = ["https://i.imgur.com/lRpr6kd.jpeg"];
    var rd = background[Math.floor(Math.random() * background.length)];
    let getAvtmot = (
      await axios.get(
        `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
        { responseType: "arraybuffer" }
      )
    ).data;
    fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));
    let getbackground = (
      await axios.get(rd, {
        responseType: "arraybuffer",
      })
    ).data;
    fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
    let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(pathAvt1);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "400 23px Arial";
    ctx.fillStyle = "#1878F3";
    ctx.textAlign = "start";
    const lines = await this.wrapText(ctx, name, 1160);
    ctx.fillText(lines.join("\n"), 200, 497); //comment
    ctx.beginPath();
    ctx.drawImage(baseAvt1, 300, 150, 250, 250);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
    return api.sendMessage(
      {
        body: `╭━─━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━─━❯❯\n\n🎉🎁𝐇𝐀𝐏𝐏𝐘🎊𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘🎁🎉\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╔⏤⏤╝${name}╚⏤⏤╗\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nhappy happy day today is your birthday, happy walk, happy talk, happy every moment and every day, happy birthday\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nশুভ শুভ শুভদিন আজ তোমার জন্মদিন, শুভ হোক পথচলা, অটুট হোক কথাবলা, শুভ হোক তোমার প্রতিমুহূর্ত আর প্রতিদিন, শুভ জন্মদিন\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰━─━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━─━❯❯`,
        attachment: fs.createReadStream(pathImg)
      },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID
    );
  },
};
