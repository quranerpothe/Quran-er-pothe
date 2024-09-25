module.exports.config = {
	name: "namaz",
	version: "1.0.1",
	role: 0,
	author: "RB-BADOL-KHAN",
	description: "namaz",
   category: "media",
	usages: "namaztime",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const prompt = args.join(" ");

  if (!prompt) return api.sendMessage("[ ! ] Input Your address", event.threadID, event.messageID);

   
 const RAHAD = `http://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(RAHAD);

    const timings = response.data.data.timings;
 
    const videoBuffer = await axios.get("https://i.imgur.com/IqxOD84.jpeg", { responseType: 'stream' });

    const videoReadStream = videoBuffer.data;

    const msg = `╭•┄┅══𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕══┅┄•╮\n\nনামাযের-সময়:${prompt}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ফজর: ${timings.Fajr}\n\n╰┈► যহর: ${timings.Dhuhr}\n\n╰┈► আছর: ${timings.Asr}\n\n╰┈► সূর্যাস্ত: ${timings.Sunset}\n\n╰┈► মাগরিব: ${timings.Maghrib}\n\n╰┈► ইশা: ${timings.Isha}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ইমসাক: ${timings.Imsak}\n\n╰┈► মধ্যরাত: ${timings.Midnight}\n\n╰•┄┅══𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕══┅┄•╯`;

    return api.sendMessage(
      {
        body: msg,
        attachment: videoReadStream,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {
    
    console.error("API request error:", error);
    return api.sendMessage("[ ! ] An error occurred while fetching data.", event.threadID, event.messageID);
  }
};
