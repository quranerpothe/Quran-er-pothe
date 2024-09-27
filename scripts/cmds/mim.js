const axios = require("axios");

const baseApiUrl = async () => {
	const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
	return base.data.api;
};

module.exports.config = {
	name: "mim",
	version: "1.0.0",
	role: 0,
	author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕", //modified by Badol
	description: "sim +goibot",
	guide: { en: "[message]" },
	category: "ChatBots",
	countDown: 1,
};

module.exports.onStart = ({}) => {};

module.exports.onReply = async function ({ api, event }) {
	if (event.type === "message_reply") {
		const reply = event.body.toLowerCase();
		if (isNaN(reply)) {
			try {
				const baseUrl = await baseApiUrl();
				const response = await axios.get(`${baseUrl}/baby?text=${encodeURIComponent(reply)}`);
				const ok = response.data.reply;
				await api.sendMessage(
					ok,
					event.threadID,
					(error, info) => {
						if (!error) {
							global.GoatBot.onReply.set(info.messageID, {
								commandName: this.config.name,
								type: "reply",
								messageID: info.messageID,
								author: event.senderID,
								link: ok,
							});
						}
					},
					event.messageID,
				);
			} catch (bado) {
				console.badol(`${badol.message}`);
				api.sendMessage(`${badol.message}`, event.threadID, event.messageID);
			}
		}
	}
};

	module.exports.onChat = async function ({ api, event }) {
		try {
			const input = event.body.toLowerCase();

			if (input === "mim" || input === "Mim") {
				const messages = [
					"বেশি mim mim করলে চুম্মা দিয়া তোমার কিডনি ব্লক করে দেবো😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "এত যে মিম করো তোমরা কি আমার ভাতার লাগে 🥴" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , ", মিম না ভাবি বল ভাবি 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু মিম মিম করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "আর একবার আমার নাম ধরে ডাকলে তোরে কোলে করে বেডরুমে নিয়ে আসব 😉" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস বাদল চৌধুরী কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকে বস রাজা বাবু কে একটা গফ দে 🙄"
				];
				const rh = messages[Math.floor(Math.random() * messages.length)];
				await api.sendMessage(rh, event.threadID, event.messageID);
				return;
			}

			if (input.startsWith("mim") || input.startsWith("Mim")) {
				const query = input.replace(/^(suna|sona)\s+/, "");
		if (query) {
				const baseUrl = await baseApiUrl();
				const response = await axios.get(`${baseUrl}/baby?text=${encodeURIComponent(query)}`);
				const reply = response.data.reply;
				await api.sendMessage(
					{ body: reply },
					event.threadID,
					(error, info) => {
						if (!error) {
							global.GoatBot.onReply.set(info.messageID, {
								commandName: this.config.name,
								type: "reply",
								messageID: info.messageID,
								author: event.senderID,
								link: reply,
							});
						}
					},
					event.messageID,
				);
			}
		}
			}
		   catch (badol) {
				console.badol(`${badol.message}`);
				api.sendMessage(`${badol.message}`, event.threadID, event.messageID);
			}
	};
