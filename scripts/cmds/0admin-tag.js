module.exports = {
	config: {
		name: "goiadmin",
		author: "RB-BADOL-KHAN",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100003578151553") {
		var aid = ["100003578151553"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["বস জান চৌধুরী কই থুমি থুমারে এক বলদে ডাকে😁🤣", "বস জান চৌধুরী কে আর একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖", "যা বলার আমাকে বলো য়ামাল বস জান চৌধুরী এখন বিজি আছে🥰","য়ামাল বস জান চৌধুরী কে এতো ডাকো কেন😒 ভালো টালো বাসো নাকি🤭","য়ামাল বস জান চৌধুরী কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡","বস জান চৌধুরী এখন অফিস এর কাজে বিজি আছে যা বলার আমাকে বলো"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
